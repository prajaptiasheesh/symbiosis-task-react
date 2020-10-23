import React from 'react'

function Header() {
    return (
        <div className="row header ">
            <div className="col-md-8" >
                <div className="logo" >
                    LOGO
                </div>
            </div>
            <div className="col-md-4">
                <nav class="nav justify-content-end ">
                    <a class="nav-link text-dark" href="#">Home</a>
                    <a class="nav-link text-dark" href="#">My Portfolio</a>
                    <a class="nav-link text-dark" href="#">Clients  </a>
                    <a class="nav-link text-dark " href="#" tabindex="-1" aria-disabled="true">Get In Touch</a>
                </nav>
            </div>
        </div>
    )
}

export default Header
