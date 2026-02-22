import dotenv from "dotenv";
dotenv.config();

import express from "express";
import pg from "pg";

const { Pool } = pg;

const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default app;

const PORT = process.env.PORT || 5000;

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);


//HEALTH CHECK

app.get('/api/v1/healthcheck', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// CREATE
app.post(
  "/api/v1/students",
  asyncHandler(async (req, res) => {
    const { name, age, course } = req.body;

    if (!name || !age || !course) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await pool.query(
      "INSERT INTO students (name, age, course) VALUES ($1, $2, $3) RETURNING *",
      [name, age, course]
    );

    res.status(201).json(result.rows[0]);
  })
);

// READ ALL
app.get(
  "/api/v1/students",
  asyncHandler(async (req, res) => {
    const result = await pool.query("SELECT * FROM students");
    res.json(result.rows);
  })
);

// READ ONE
app.get(
  "/api/v1/students/:id",
  asyncHandler(async (req, res) => {
    const result = await pool.query(
      "SELECT * FROM students WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(result.rows[0]);
  })
);

// UPDATE
app.put(
  "/api/v1/students/:id",
  asyncHandler(async (req, res) => {
    const { name, age, course } = req.body;

    const result = await pool.query(
      "UPDATE students SET name=$1, age=$2, course=$3 WHERE id=$4 RETURNING *",
      [name, age, course, req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(result.rows[0]);
  })
);

// DELETE
app.delete(
  "/api/v1/students/:id",
  asyncHandler(async (req, res) => {
    const result = await pool.query(
      "DELETE FROM students WHERE id=$1 RETURNING *",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Deleted successfully" });
  })
);


app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});


app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    message: "Internal Server Error",
  });
});


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
