# Getting Started with Create React App

Welcome to the Task Management app.

You can acesss the app here - https://react-task-management-application.netlify.app/

Steps to run the app

Instructions to Run the Task Management Application
Prerequisites
Before you start, make sure you have the following installed on your system:

Node.js: This application requires Node.js to run. You can download it from nodejs.org.
npm: npm (Node Package Manager) comes bundled with Node.js. You can verify if it’s installed by running npm -v in your terminal.
Step 1: Clone the Repository
If you have a repository containing the code, clone it to your local machine using:
git clone https://github.com/yourusername/task-manager.git


Step 2: Install Dependencies
Navigate to your project folder and install the necessary dependencies using npm:

bash
Copy code
npm install
This command will read the package.json file and install all required packages.

Step 3: Start the Development Server
Once the dependencies are installed, you can start the development server with:

bash
Copy code
npm start
This command will launch the application in your default web browser. The application should be running at http://localhost:3000.

Step 4: Interacting with the Application
Login:

Enter a username and password in the login form. For simplicity, you can use any username (e.g., "user1") since the example does not have backend authentication.
Click the Login button to authenticate and access the task management interface.
Task Management:

Once logged in, you can:
Add a Task: Type a task name in the input field and click Add Task.
View Tasks: Your tasks will be displayed in a list.
Complete a Task: Click the Complete button next to a task to mark it as completed. This will visually indicate the task's status (e.g., strikethrough).
Delete a Task: Click the Delete button next to a task to remove it from your task list.
Logout:

Click the Logout button to end your session. This will redirect you back to the login screen.


The application should allow users to log in, manage their tasks, and store the tasks persistently in
localStorage. Each user will have their own task list, and tasks should be stored specific to the logged-in user.


The structure I followed is as follows -
I have used context API for state management.
So, there are two contexts - Login context and Task context.
There are three components, Login, TaskList and TaskManager.
Under utils folder,I have a localStorageUtils file that has local storage functions

Some screenshots of the app

<img width="1783" alt="Screenshot 2024-10-24 at 10 39 07 AM" src="https://github.com/user-attachments/assets/f93250b7-530f-49ce-8e37-714a46362f80">

<img width="1792" alt="Screenshot 2024-10-24 at 10 39 38 AM" src="https://github.com/user-attachments/assets/9cb3ea91-a60b-46ae-a326-29bf5b19f231">
