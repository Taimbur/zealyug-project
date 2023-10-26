import React from 'react'
import '../Header/Header.css'
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png'
import user from '../../assets/img/sahil.png'
const Header = () => {
    return (
        <div>
            <header className="container header " id="myheader">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="/card">
                            <img src={logo} alt="site-logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link"> Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link"> Jobs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link> <div className="dropdown">
                                        <a className="btn mt-2 dropdown-toggle  " href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                            Hire Talent                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Posts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Insta Job</Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav   mb-lg-0 gap-2 ">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="ri-notification-3-line fs-4"></i>
                                    </Link>
                                </li>
                                <li className="nav-item userImg">

                                    <img src={user} alt="userIcon" className='userImg' />
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="ri-apps-line fs-4"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header