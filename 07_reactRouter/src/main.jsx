import React from 'react'
import ReactDOM from 'react-dom/client'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import About from './assets/components/About.jsx'
import Layout from './Layout.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <element/>,
//     children: [
//       {
//       path: '',
//       element: <Home/>
//       },
//       {
//       path: 'about',
//       element: <About/>
//       },
//       {
//       path: 'contact',
//       element: <Contact/>
//       },
//       {
//       path: 'user',
//       element: <User/>
//       },
//    ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Layout/>} >
      <Route path ='About' element = {About}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
