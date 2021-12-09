import React from "react";
import stile from './Header.module.css'
import heder from '../../img/heder.jpg'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={stile.header}>
            <img src={heder} className={stile.photo} />
            <div className={stile.login}>
                {props.isAuth ? 
                <div>
                    {props.login} - <button onClick={props.logout} >Log out</button>
                </div>
                    : <NavLink to='/login' >Login</NavLink>}
            </div>
        </div>
    );
}

export default Header;