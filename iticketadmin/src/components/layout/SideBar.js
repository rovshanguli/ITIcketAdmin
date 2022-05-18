import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
  <ul className="nav">
    <li className="nav-item nav-profile">
      <a href="#" className="nav-link">
        <div className="profile-image">
          <img className="img-xs rounded-circle" src={require('../../assets/images/faces/face8.jpg')} alt="profile image"/>
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
      <Link to='/event'><span className="nav-link">Event</span></Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="index.html">
        <span className="menu-title">Dashboard</span>
        <i className="icon-screen-desktop menu-icon"></i>
      </a>
    </li>
    <li className="nav-item nav-category"><span className="nav-link">UI Elements</span></li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
        <span className="menu-title">Basic UI Elements</span>
        <i className="icon-layers menu-icon"></i>
      </a>
      <div className="collapse" id="ui-basic">
        <ul className="nav flex-column sub-menu">
          <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
          <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
        </ul>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="pages/icons/simple-line-icons.html">
        <span className="menu-title">Icons</span>
        <i className="icon-globe menu-icon"></i>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="pages/forms/basic_elements.html">
        <span className="menu-title">Form Elements</span>
        <i className="icon-book-open menu-icon"></i>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="pages/charts/chartist.html">
        <span className="menu-title">Charts</span>
        <i className="icon-chart menu-icon"></i>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="pages/tables/basic-table.html">
        <span className="menu-title">Tables</span>
        <i className="icon-grid menu-icon"></i>
      </a>
    </li>
    <li className="nav-item nav-category"><span className="nav-link">Sample Pages</span></li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
        <span className="menu-title">General Pages</span>
        <i className="icon-doc menu-icon"></i>
      </a>
      <div className="collapse" id="auth">
        <ul className="nav flex-column sub-menu">
          <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
          <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
          <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
          <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
          <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
        </ul>
      </div>
    </li>
    <li className="nav-item pro-upgrade">
      <span className="nav-link">
        <a className="btn btn-block px-0 btn-rounded btn-upgrade" href="https://www.bootstrapdash.com/product/stellar-admin-template/" target="_blank"> <i className="icon-badge mx-2"></i> Upgrade to Pro</a>
      </span>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default SideBar