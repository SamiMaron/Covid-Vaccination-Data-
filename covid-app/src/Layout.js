import {Link, Outlet} from "react-router-dom";
import React from "react";
import './Layout.css';

import "./App";

/**
 * the layout component of our pages to navigate
 * @returns {JSX.Element}
 * @constructor
 */
function Layout() {
    return (
        <div className="layout-container">
          <nav className="nav-section">
            <Link to="/" className="registration-link">
              <span>Registration</span>
            </Link>
            <Link to="/summary" className="summary-link">
              <span>Summary</span>
            </Link>
            <div><br /></div>
          </nav>
          <Outlet />
        </div>
      );
    // return (
    //     <div className={"navSection"}>
    //         <nav>
    //             <Link to="/" className={"registrain"}>
    //                 <span>Registration</span>
    //             </Link>
    //             <span>&nbsp;</span>
    //             <Link to="/summary" className={"summary"}>
    //                 <span>Summary</span>
    //             </Link>
    //             <div><br/></div>
    //         </nav>
    //         <Outlet/>
    //     </div>
    // )
}

export default Layout;