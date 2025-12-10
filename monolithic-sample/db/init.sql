-- Create schema
CREATE SCHEMA IF NOT EXISTS employee_db;

-- Create employee table
CREATE TABLE IF NOT EXISTS employee_db.employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    department VARCHAR(255)
);
