import { Outlet, Link } from "react-router-dom";
import { memo } from "react";

import logo from '../images/logo.svg';
import userProfile from '../images/user.svg';

const Layout = () => {
    return (
    <>
        <header>
            <ul>
                <Link to="/"><img id="home-logo" src={logo} alt="logo"/></Link>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="active">Active</Link>
                </li>
                <Link to="userProfile"><img id="user-profile" src={userProfile} alt="logo"/></Link>
            </ul>
        </header>
        
        <Outlet />

    </>
    );
}

export default memo(Layout);