const questionsManager = ([
    {
        name: "role",
        message: "Would you like to build a team page?",
        when: (answers) => answers.role === "Manager",
    },
    {
        name: "name",
        message: "Who is the manager for this team?",
    },
    {
        name: "id",
        message: "What is the manager's ID?",
    },
    {
        name: "email",
        message: "Enter the manager's email: ",
    },
    {
        name: "officeNumber",
        message: "Enter the manager's office number:",
    },
    {
        name: "another",
        message: "Add employees under this manager? ",
    }
])

const questions = ([
    {
        name: "role",
        message: "Select type of employee: ",
        type: "checkbox",
        choices: ["Engineer", "Intern"],
    },
    {
        name: "name",
        message: "Enter the employee's name: ",
    },
    {
        name: "id",
        message: "Enter the employee's id: ",
    },
    {
        name: "email",
        message: "Enter the employee's email: ",
    },
    {
        name: "github",
        message: "Enter the engineer's github username:",
        when: (answers) => answers.role === "Engineer",
    },
    {
        name: "school",
        message: "Enter the intern's school name:",
        when: (answers) => answers.role === "Intern",
    },
])

module.exports = [questionsManager, questions]