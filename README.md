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

Some screenshots of the app

<img width="1783" alt="Screenshot 2024-10-24 at 10 39 07 AM" src="https://github.com/user-attachments/assets/f93250b7-530f-49ce-8e37-714a46362f80">

<img width="1792" alt="Screenshot 2024-10-24 at 10 39 38 AM" src="https://github.com/user-attachments/assets/9cb3ea91-a60b-46ae-a326-29bf5b19f231">
