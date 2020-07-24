import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (

    <header className="header hea">
    <nav className="navbar navbar-expand-lg fixed-top custom-nav hea">
        <div className="container hea">
            {/* <Link className="navbar-brand" to='/Corover/public/'> */}
            <Link className="navbar-brand" to='/project/Corover/public/'>
                <img src="corover1.png" width="80" alt="logo" className="img-fluid"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="ti-menu hea">  </span>
            </button>
            <div className="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto menu hea">
                    <Link to='/' className="hea"><h4>Home &nbsp;</h4>  </Link>
                    {/* <Link to='/project/Corover/public/' className="hea"><h4>Home &nbsp;</h4>  </Link> */}
                    {/* <Link  to='/Corover/public/histories' className="hea"><h4>History &nbsp;</h4></Link> */}
                    <Link  to='/diagnosis' className="hea"><h4>Quick diagnosis &nbsp;</h4></Link>
                    {/* <Link  to='/project/Corover/public/diagnosis' className="hea"><h4>Quick diagnosis &nbsp;</h4></Link> */}
                    <Link to='/about' className="hea"><h4>About</h4></Link>
                    {/* <Link to='/project/Corover/public/about' className="hea"><h4>About</h4></Link> */}
                </ul>
            </div>
        </div>
    </nav>
    </header>

)

export default Header