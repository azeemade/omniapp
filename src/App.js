import './App.css';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-gray-50 h-screen text-gray-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
