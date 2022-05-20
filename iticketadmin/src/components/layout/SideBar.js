import React from 'react';
import { NavLink  } from 'react-router-dom';


function SideBar() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">
                    <a href="/" className="nav-link">
                        <div className="profile-image">
                            <img className="img-xs rounded-circle" src={require('../../assets/logo/logoiticket.png')} alt='/' />
                            <div className="dot-indicator bg-success"></div>
                        </div>
                        <div className="text-wrapper">
                            <p className="profile-name">Allen Moreno</p>
                            <p className="designation">Administrator</p>
                        </div>
                        <div className="icon-container">
                            <i className="icon-bubbles"></i>
                            <div className="dot-indicator bg-danger"></div>
                        </div>
                    </a>
                </li>
                <li className="nav-item nav-category">
                    <span className="nav-link">Dashboard</span>
                </li>
                <li className="nav-item">
                    
                        <NavLink className="menu-title nav-link" to='/events'><span >Event</span></NavLink>
                        <i className="icon-screen-desktop menu-icon"></i>
                    
                </li>
            </ul>
        </nav>

    )
}

export default SideBar