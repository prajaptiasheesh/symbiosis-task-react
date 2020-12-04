import React from 'react'
import { withRouter } from 'react-router-dom'

function Header({ history }) {
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
                    <buttion type="button" onClick={()=>history.push('/step-forms')} class="nav-link text-dark" >My Forms</buttion>
                    <buttion class="nav-link text-dark" >Clients  </buttion>
                    <buttion class="nav-link text-dark " tabindex="-1" aria-disabled="true">Get In Touch</buttion>
                </nav>
            </div>
        </div>
    )
}

export default withRouter(Header)
