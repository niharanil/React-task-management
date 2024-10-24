# Getting Started with Create React App

Welcome to the Task Management app.
You can acesss the app here - https://react-task-management-application.netlify.app/

The application should allow users to log in, manage their tasks, and store the tasks persistently in
localStorage. Each user will have their own task list, and tasks should be stored specific to the logged-in user.


The structure I followed is as follows -
I have used context API for state management.
So, there are two contexts - Login context and Task context.
There are three components, Login, TaskList and TaskManager.
Under utils folder,I have a localStorageUtils file that has local storage functions
