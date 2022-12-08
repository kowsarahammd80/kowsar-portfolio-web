
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routers from './Router/Router/Router';

function App() {
  return (
    <div className="mx-0 lg:mx-10">
        <RouterProvider router={routers}>
           
        </RouterProvider>
    </div>
  );
}

export default App;
