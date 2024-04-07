import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Career from './Components/Career/Career';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Components/Login/login';
import Register from './Components/Register/Register';
import NewsDetails from './Components/NewsDetails/NewsDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:"/",
        loader:()=> fetch('/news.json'),
        element: <Home></Home>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/career",
        element: <Career></Career>
      },
      {
        path:"/login",
       element: <Login></Login>,

      } ,
      {
        path:"/register",
       element: <Register></Register>,

      },{
        path:"/news/:NewsId",
        loader:()=> fetch(`/news.json`),
        element: <NewsDetails></NewsDetails>,

      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
     
  </React.StrictMode>,
)
