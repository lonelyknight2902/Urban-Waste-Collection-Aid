import React from 'react'
import { useNavigate } from 'react-router-dom';
import './TopBar.css'

function TopBar() {
  const navigate = useNavigate();
  return (
    <div className='top-bar'>
        <h2 onClick={(e) => {e.preventDefault(); navigate('dashboard')}}>Urban Waste Collection 2.0</h2>
        <button onClick={(e) => {e.preventDefault(); navigate('/')}}>Logout</button>
    </div>
  )
}

export default TopBar