import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import{RouterProvider,createBrowserRouter} from 'react-router-dom';
import Register from './components/Register.jsx';
import Layout from './components/Layout.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {index:true,element:<Register/>},
      {path:'/login',element:<Login/>}
    ]    
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
