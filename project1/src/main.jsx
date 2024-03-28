import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Login from './components/Login.jsx';
import Services from './components/Services.jsx';
import Donate from './components/Donate.jsx';
import Plans from './components/Plans.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx';
import Register from './components/Register.jsx';
import Callback from './components/Callback.jsx';
import Thankyou from './pages/Thankyou.jsx';
import Contactus from './components/Contactus.jsx';
const router=createBrowserRouter([
  {
      path:'/',
      element:<App/>,
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/services', 
    element:<Services />
  },
  {
    path:'/register', 
    element:<Register />
  },
  {
    path:'/donate',
    element:<Donate />
  },
  {
   path:'/sidebar',
   element:<Sidebar/>
  },
  {
    path:'/plans',
    element:<Plans/>
   },
   {
    path:'/callback',
    element:<Callback/>
   },
   {
    path:'/thankyou',
    element:<Thankyou/>
   },
   {
    path:'/contact',
    element:<Contactus/>
   },
 
 

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);