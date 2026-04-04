import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Mobile from './Components/Mobile/Mobile.jsx'
import Laptop from './Components/Laptop/Laptop.jsx'
import User from './Components/Users/User.jsx'

// const load = fetch('https://jsonplaceholder.typicode.com/users')

const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children :[
      {index:true, Component:Home},
      {path:'Mobiles',Component:Mobile},
      {path:'Laptop',Component:Laptop},
      {path:'users',
        loader: () => ('https://jsonplaceholder.typicode.com/users'),
        Component:User
      }
    ]
  }
  ,
  {
    path:"/about",
    Component:App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
