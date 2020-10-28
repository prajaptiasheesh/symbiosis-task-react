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
                    <buttion class="nav-link text-dark" >Home</buttion>
                    <buttion class="nav-link text-dark" >My Portfolio</buttion>
                    <buttion class="nav-link text-dark" >Clients  </buttion>
                    <buttion class="nav-link text-dark " tabindex="-1" aria-disabled="true">Get In Touch</buttion>
                </nav>
            </div>
        </div>
    )
}

export default Header
