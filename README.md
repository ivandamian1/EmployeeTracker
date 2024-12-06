# Employee Tracker

## Description

The **Employee Tracker** is a command-line application that allows business owners to efficiently manage their company's employee database. By interacting with a PostgreSQL database, users can perform CRUD operations on departments, roles, and employees. This project is built using Node.js, Inquirer, and PostgreSQL.

---

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ivandamian1/EmployeeTracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd EmployeeTracker
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Set up the PostgreSQL database:
   - Create a PostgreSQL database using your preferred tool.
   - Use the `schema.sql` file to create the necessary tables:
     ```sql
     \i schema.sql
     ```
   - (Optional) Use the `seeds.sql` file to populate the database with sample data:
     ```sql
     \i seeds.sql
     ```

5. Configure database connection:
   - Create a `.env` file in the project directory and add your database credentials:
     ```env
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=employee_tracker
     ```

---

## Usage

1. Run the application:
   ```bash
   node index.js
   ```
2. Use the interactive menu to:
   - View all departments
   - View all roles
   - View all employees
   - Add a new department, role, or employee
   - Update an employee's role

---

## Features

- **View Data**: View all departments, roles, and employees in a formatted table.
- **Add Entries**: Add new departments, roles, and employees to the database.
- **Update Data**: Update the role of an existing employee.
- **User-Friendly Interface**: Intuitive and easy-to-navigate command-line interface.

---

## Walkthrough Video

Watch the walkthrough video demonstrating the application's functionality:
[Walkthrough Video](https://drive.google.com/file/d/1E0dSODlMpBzv9f5alPy3gz_ZGRb5qv-n/view?usp=sharing)

---

## Technologies Used

- **Node.js**: Backend runtime for the application.
- **Inquirer.js**: Command-line user interaction.
- **PostgreSQL**: Relational database to store company data.
- **pg Package**: Node.js library for PostgreSQL connection and queries.

---

## License

This project is licensed under the [MIT License](LICENSE). 

Feel free to contribute to the project or adapt it for your own use!