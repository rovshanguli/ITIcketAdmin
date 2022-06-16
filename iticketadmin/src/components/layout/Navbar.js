import React from 'react'

function Navbar() {
    return (
      
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="navbar-brand-wrapper d-flex align-items-center">
                    <a className="navbar-brand brand-logo" href="index.html">
                        <img style={{height:'60px'}} src={require('../../assets/logo/logoiticket.png')} alt="logo" className="logo-dark" />
                    </a>
                   
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center flex-grow-1">
                    <h5 className="mb-0 font-weight-medium d-none d-lg-flex">Welcome ITicket Admin Panel!</h5>
                    <ul className="navbar-nav navbar-nav-right ml-auto">
                        <form className="search-form d-none d-md-block" action="#">
                            <i className="icon-magnifier"></i>
                            <input type="search" className="form-control" placeholder="Search Here" title="Search here" />
                        </form>
                        <li className="nav-item"><a href="/" className="nav-link"><i className="icon-basket-loaded"></i></a></li>
                        <li className="nav-item"><a href="/" className="nav-link"><i className="icon-chart"></i></a></li>
                       
                        <li className="nav-item dropdown language-dropdown d-none d-sm-flex align-items-center">
                          
                        </li>
                        <li className="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
                            <a className="nav-link dropdown-toggle" id="UserDropdown" href="/" data-toggle="dropdown" aria-expanded="false">
                             <span className="font-weight-normal">Asgar Asgarov </span></a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                <div className="dropdown-header text-center">
                                    {/* <img className="img-md rounded-circle" src={require('../../assets/images/faces/face8.jpg')} alt='' /> */}
                                
                                </div>
                                <a className="dropdown-item" href='/'><i className="dropdown-item-icon icon-user text-primary"></i> My Profile <span className="badge badge-pill badge-danger">1</span></a>
                                <a className="dropdown-item" href='/'><i className="dropdown-item-icon icon-speech text-primary"></i> Messages</a>
                                <a className="dropdown-item" href='/'><i className="dropdown-item-icon icon-energy text-primary"></i> Activity</a>
                                <a className="dropdown-item" href='/'><i className="dropdown-item-icon icon-question text-primary"></i> FAQ</a>
                                <a className="dropdown-item" href='/'><i className="dropdown-item-icon icon-power text-primary"></i>Sign Out</a>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="icon-menu"></span>
                    </button>
                </div>
            </nav>
        
    )
}

export default Navbar