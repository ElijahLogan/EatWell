import React from 'react'
import {Link} from 'react-router-dom';

//link will replace href

const Navbar = () => {
    return (
        <div>
           <nav className="navbar bg-dark">
              <h1>
                     <Link to="/">
                     <i className="fas fa-code"></i> Senpai</Link>
              </h1>
               <ul>
                 <li><Link to="#!">Developers</Link></li>
                <li><Link to="/register">Register</Link></li>
                 <li><Link to="login">Login</Link></li>
              </ul>
            </nav>  
        </div>
    )
}

export default Navbar