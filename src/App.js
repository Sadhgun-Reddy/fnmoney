import './App.css';

import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
],);
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
