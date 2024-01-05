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
        path:'/buy',
        element:<Buy/>
      },
      {
        path:'/buylipstick',
        element:<AddProduct/>
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
