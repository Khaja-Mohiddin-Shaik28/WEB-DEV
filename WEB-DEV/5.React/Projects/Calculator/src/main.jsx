import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-black text-2xl w-full min-h-[100vh] flex justify-center items-center'>
    <App />
    </div>
  </React.StrictMode>,
)
