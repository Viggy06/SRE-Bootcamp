// test.js

import request from "supertest";
import { expect } from "chai";
import app from "../server.js";

describe("Student API Tests", () => {

  let createdId;

  // Healthcheck
  it("GET /healthcheck should return OK", async () => {
    const res = await request(app)
      .get("/api/v1/healthcheck");

    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal("OK");
  });

  // CREATE
  it("POST /students should create student", async () => {
    const res = await request(app)
      .post("/api/v1/students")
      .send({
        name: "John",
        age: 20,
        course: "Engineering"
      });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("id");

    createdId = res.body.id; // save for next tests
  });

  // READ ALL
  it("GET /students should return array", async () => {
    const res = await request(app)
      .get("/api/v1/students");

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  // READ ONE
  it("GET /students/:id should return one student", async () => {
    const res = await request(app)
      .get(`/api/v1/students/${createdId}`);

    expect(res.status).to.equal(200);
    expect(res.body.id).to.equal(createdId);
  });

  // UPDATE
  it("PUT /students/:id should update student", async () => {
    const res = await request(app)
      .put(`/api/v1/students/${createdId}`)
      .send({
        name: "Jane",
        age: 21,
        course: "Science"
      });

    expect(res.status).to.equal(200);
    expect(res.body.name).to.equal("Jane");
  });

  // DELETE
  it("DELETE /students/:id should delete student", async () => {
    const res = await request(app)
      .delete(`/api/v1/students/${createdId}`);

    expect(res.status).to.equal(200);
  });

});
