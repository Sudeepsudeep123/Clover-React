import React from 'react'

function NavBar() {
    return (
        <div className="container-xxl position-relative p-0" >
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="m-0">Clover Tech Nepal</h1>
                    {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <a href="/home" className="nav-item nav-link active">Home</a>
                        <a href="/about-us" className="nav-item nav-link active">About Us</a>
                        <a href="/service" className="nav-item nav-link">Service</a>
                        <a href="/project" className="nav-item nav-link">Project</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="/team" className="dropdown-item">Our Team</a>
                                <a href="/testimonial" className="dropdown-item">Testimonial</a>
                                <a href="/404" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="/contact" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
                </div>
            </nav>


        </div>
    )
}
export default NavBar;
