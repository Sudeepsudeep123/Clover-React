import React from 'react'

export default function FirstPage() {
    return (
        <div className="container-xxl bg-primary hero-header">
            <div className="container px-lg-5">
                <div className="row g-5 align-items-end">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="text-white mb-4 animated slideInDown">Empowering Innovation, Enabling Excellence</h1>
                        <p className="text-white pb-6 animated slideInDown">Your Vision, Our Expertise</p>
                        <a href="/about-us" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</a>
                        <a href="" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                    </div>
                    <div className="col-lg-6 text-center text-lg-start">
                        <img className="img-fluid animated zoomIn" src="img/cloverlogo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
