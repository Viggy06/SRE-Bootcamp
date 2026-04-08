import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import { expect } from 'chai';

const app = express();

app.use(bodyParser.json());

// Reuse the routes from server.js
let students = [];
let nextId = 1;

app.get('/api/v1/healthcheck', (req, res) => res.status(200).json({ status: 'OK' }));
app.post('/api/v1/students', (req, res) => {
  const student = { id: nextId++, ...req.body };
  students.push(student);
  res.status(201).json(student);
});
app.get('/api/v1/students', (req, res) => res.json(students));
app.get('/api/v1/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.json(student);
});
app.put('/api/v1/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  Object.assign(student, req.body);
  res.json(student);
});
app.delete('/api/v1/students/:id', (req, res) => {
  students = students.filter(s => s.id !== parseInt(req.params.id));
  res.status(204).end();
});

describe('Student API', () => {
  it('should return healthcheck status', async () => {
    const res = await request(app)
      .get('/api/v1/healthcheck')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.body.status).to.equal('OK');
  });

  it('should create a new student', async () => {
    const newStudent = { name: 'John Doe', age: 21 };
    const res = await request(app)
      .post('/api/v1/students')
      .send(newStudent)
      .expect(201);
    expect(res.body).to.include(newStudent);
  });

  it('should get all students', async () => {
    const res = await request(app)
      .get('/api/v1/students')
      .expect(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a student by ID', async () => {
    const res = await request(app)
      .get('/api/v1/students/1')
      .expect(200);
    expect(res.body.id).to.equal(1);
  });

  it('should update a student', async () => {
    const updatedStudent = { name: 'Jane Doe', age: 22 };
    const res = await request(app)
      .put('/api/v1/students/1')
      .send(updatedStudent)
      .expect(200);
    expect(res.body).to.include(updatedStudent);
  });

  it('should delete a student', async () => {
    await request(app)
      .delete('/api/v1/students/1')
      .expect(204);
  });
});
