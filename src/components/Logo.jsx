import React from 'react'
import './logo.css'
const Logo = () => {
    const handleToggleSideBar = () => {
        document.body.classList.toggle("toggle-sidebar");
    };
  return (
    <div className='d-flex align-items-center justify-content-between'>
        <a href="/" className='logo d-flex align-items-center'>
        {/* <img src="" alt="" /> */}
         <span className='d-none d-lg-block'>AdminDashboard</span>
        </a>

        <i
         className='bi bi-list toggle-slider-btn'
         onClick={handleToggleSideBar}
        ></i>
    </div>
  )
}

export default Logo