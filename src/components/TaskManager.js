import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskList from './TaskList';

function TaskManager() {
  const { tasks, addTask, logout } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>This is the Task Manager. Add your tasks below!</h2>
      <button onClick={logout}>Logout</button>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskManager;
