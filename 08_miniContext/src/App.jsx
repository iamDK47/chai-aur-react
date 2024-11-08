import React from "react";
import './App.css'
import { UserContextProvider } from './Context/UserContextProvider'
import { Login } from './components/Login'

function App() {

  return (
    <>
      <UserContextProvider>
      <Login />
      <Profile />
      </UserContextProvider>
    </>

  )
}

export default App
