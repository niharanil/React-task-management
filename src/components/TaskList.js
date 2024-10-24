import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskList({ tasks }) {
  const { toggleComplete, deleteTask, editTask } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <input
            type="text"
            value={task.title}
            onChange={(e) => editTask(index, e.target.value)}
          />
          <button onClick={() => toggleComplete(index)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
