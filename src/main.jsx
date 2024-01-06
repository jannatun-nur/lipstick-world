import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import AuthProvider from './Provider/AuthProvider';
import Buy from './Pages/Home/BuyProduct/Buy';
import AddProduct from './Pages/Home/AddProduct/AddProduct';
import SignUp from './Pages/Home/SignUp/SignUp';
import Login from './Pages/Home/Login/Login';
import ProductCard from './Pages/Home/AddProduct/ProductCard';
import Update from './Pages/Home/AddProduct/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/signin',
        element:<Login/>

      },
      {
        path:'/buy',
        element:<Buy/>
      },
      {
        path:'/buylipstick',
        element:<AddProduct/>
      },
        {
          path:'/update',
          element:<Update/>,
          
        },
      {
        path: '/productcard',
        element:<ProductCard/>
        // loader:({ params })=> fetch(`http://localhost:5000/get-allbuys/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className='bg-white'>
    <RouterProvider router={router} />
    </div>
    </AuthProvider>
  </React.StrictMode>,
)
