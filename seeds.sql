INSERT INTO department (name)
VALUES ('Engineering'),
       ('Sales'),
       ('Finance'),
       ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Engineer', 100000, 1),
       ('Sales Lead', 150000, 2),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 1),
       ('Mike', 'Chan', 2, 2),
        ('Ashley', 'Rodriguez', 3, 3),
        ('Kevin', 'Tupik', 4, 4),
        ('Kunal', 'Singh', 1, 5);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;