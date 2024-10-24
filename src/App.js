import { useContext } from 'react';
import Login from './components/Login';
import TaskManager from './components/TaskManager';
import { LoginContext } from './context/LoginContext';
import { TaskProvider } from './context/TaskContext';

function App() {
  const { user } = useContext(LoginContext);

  return (
    <div>
      {user ? (
        <TaskProvider>
          <TaskManager />
        </TaskProvider>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
