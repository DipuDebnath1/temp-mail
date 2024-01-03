import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
// import Faq from './Pages/Faq.jsx';
import Feedback from './Pages/Feebdack.jsx';
import Home from './Pages/home/Home.jsx';
import Faq from './Pages/faq/Faq.jsx';
import Privacy from './Pages/privacy/Privacy.jsx';
import Contacts from './Pages/contact/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/', 
        element:<Home />
      },
      {
        path:'/faq', 
        element:<Faq />
      },
      {
        path:'/privacy', 
        element:<Privacy></Privacy>
      },
      {
        path:'/feedback', 
        element:<Feedback></Feedback>
      },
      {
        path:'/contact', 
        element:<Contacts></Contacts>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
