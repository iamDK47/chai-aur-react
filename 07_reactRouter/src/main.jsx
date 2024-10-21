import React from 'react'
import ReactDOM from 'react-dom/client'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import About from './assets/components/About.jsx'
import Layout from './Layout.jsx'
import Home from './assets/components/Home.jsx'
import Contact from './assets/components/Contact.jsx'
import Github from './assets/components/Github.jsx'
import {gitHubInfoLoader} from './assets/components/Github.jsx'

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
      <Route path ='' element = {<Home />}/>
      <Route path ='about' element = {<About />}/>
      <Route path ='Contact' element = {<Contact />}/>
      <Route 
      loader={gitHubInfoLoader}
      path ='git' 
      element = {<Github />}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
