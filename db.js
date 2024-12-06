const pool = require('./dbConfig');

const db = {
    getDepartments: async () => {
        const result = await pool.query('SELECT * FROM department;');
        return result.rows;
    },
    addDepartment: async (name) => {
        await pool.query('INSERT INTO department (name) VALUES ($1);', [name]);
    },
    getRoles: async () => {
        const result = await pool.query('SELECT * FROM role;');
        return result.rows;
    },
    addRole: async (title, salary, department_id) => {
        await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3);', [title, salary, department_id]);
    },
    getEmployees: async () => {
        const result = await pool.query('SELECT * FROM employee;');
        return result.rows;
    },
    addEmployee: async (first_name, last_name, role_id, manager_id) => {
        await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4);', [first_name, last_name, role_id, manager_id]);
    },
    updateEmployeeRole: async (employee_id, role_id) => {
        await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2;', [role_id, employee_id]);
    },
};

module.exports = db;