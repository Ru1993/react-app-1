import React from "react";
import { NavLink } from "react-router-dom";
import stile from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={stile.navbar}>
            <div className={ stile.item }>
            <div>
                <NavLink to='/profile'activeClassName={stile.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'activeClassName={stile.active}>Dialog</NavLink>
            </div>
            <div>
                <NavLink to='/users'activeClassName={stile.active}>Users</NavLink>
            </div>
            <div>
                Frends
            </div>
            <div>
                Video
            </div>
        </div>
        </div >
    );
}

export default Navbar;