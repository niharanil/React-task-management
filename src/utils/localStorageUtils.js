export const getUserFromLocalStorage = () => {
    return localStorage.getItem('currentUser');
  };
  
  export const saveUserToLocalStorage = (username) => {
    localStorage.setItem('currentUser', username);
  };
  
  export const clearUserFromLocalStorage = () => {
    localStorage.removeItem('currentUser');
  };
  
  export const getTasksFromLocalStorage = (username) => {
    return JSON.parse(localStorage.getItem(`tasks_${username}`));
  };
  
  export const saveTasksToLocalStorage = (username, tasks) => {
    localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
  };
  