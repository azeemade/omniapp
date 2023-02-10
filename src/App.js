import './App.css';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="md:flex justify-center items-center">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
