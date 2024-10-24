import { createContext, useState, useEffect, useContext } from 'react';
import { LoginContext } from './LoginContext';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '../utils/localStorageUtils';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const { user, logout } = useContext(LoginContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (user) {
            const savedTasks = getTasksFromLocalStorage(user);
            setTasks(savedTasks || []);
        }
    }, [user]);

    const addTask = (title) => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
        saveTasksToLocalStorage(user, newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        saveTasksToLocalStorage(user, newTasks);
    };

    const editTask = (index, newTitle) => {
        const newTasks = tasks.map((task, i) => (i === index ? { ...task, title: newTitle } : task));
        setTasks(newTasks);
        saveTasksToLocalStorage(user, newTasks);
    };

    const toggleComplete = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
        saveTasksToLocalStorage(user, newTasks);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, toggleComplete, logout }}>
            {children}
        </TaskContext.Provider>
    );
};
