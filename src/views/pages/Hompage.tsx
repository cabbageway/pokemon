import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Homepage = () => {
    return (
        <>
            <nav className="nav navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/PersonView">PersonView</Link>
                    </li>
                    <li>
                        <Link to="/PersonAdd">PersonAdd</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};


export default Homepage;