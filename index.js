const inquirer = require('inquirer');
const db = require('./db');

const menuOptions = [
    'View All Departments',
    'View All Roles',
    'View All Employees',
    'Add a Department',
    'Add a Role',
    'Add an Employee',
    'Update an Employee Role',
    'Exit',
];

async function mainMenu() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: menuOptions,
        },
    ]);

    switch (action) {
        case 'View All Departments':
            await viewDepartments();
            break;
        case 'View All Roles':
            await viewRoles();
            break;
        case 'View All Employees':
            await viewEmployees();
            break;
        case 'Add a Department':
            await addDepartment();
            break;
        case 'Add a Role':
            await addRole();
            break;
        case 'Add an Employee':
            await addEmployee();
            break;
        case 'Update an Employee Role':
            await updateEmployeeRole();
            break;
        case 'Exit':
            process.exit();
    }

    mainMenu(); // Recurse back to main menu
}

mainMenu();


async function viewDepartments() {
    const departments = await db.getDepartments();
    console.table(departments);
}

async function addDepartment() {
    const { name } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the department name:',
        },
    ]);

    await db.addDepartment(name);
    console.log(`Added ${name} to the database.`);
}

async function viewRoles() {
    const roles = await db.getRoles();
    console.table(roles);
}

async function addRole() {
    const { title, salary, department_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the role title:',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the role salary:',
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter the department ID:',
        },
    ]);

    await db.addRole(title, salary, department_id);
    console.log(`Added ${title} to the database.`);
}

async function viewEmployees() {
    const employees = await db.getEmployees();
    console.table(employees);
}

async function addEmployee() {
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the employee\'s first name:',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the employee\'s last name:',
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter the employee\'s role ID:',
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter the employee\'s manager ID:',
        },
    ]);

    await db.addEmployee(first_name, last_name, role_id, manager_id);
    console.log(`Added ${first_name} ${last_name} to the database.`);
}

async function updateEmployeeRole() {
    const employees = await db.getEmployees();
    const employeeChoices = employees.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
    }));

    const { employee_id, role_id } = await inquirer.prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Select an employee to update:',
            choices: employeeChoices,
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter the new role ID:',
        },
    ]);

    await db.updateEmployeeRole(employee_id, role_id);
    console.log(`Updated employee role.`);
}
