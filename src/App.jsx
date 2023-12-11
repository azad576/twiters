
import { useState } from 'react'
import './App.css'
import Twiter_login from './pages/Twiter_login/twiter_login'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<Twiter_login/>
    </>
  )
}

export default App
