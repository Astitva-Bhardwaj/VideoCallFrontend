import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/LoginForm"
import Meeting from "./components/MeetingForm"
import RegisterForm from "./components/RegisterForm"
import Meetings from "./components/MeetingButton"
import Camera from "./components/Camera"
import ScreenSharing from './components/ScreenSharing'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/meeting" element={<Meeting />} ></Route>
        <Route path="/meeting_button" element={<Meetings/>} />
        <Route path="/camera" element={<Camera/>} />
        <Route path="/screen_sharing" element={<ScreenSharing/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
