import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./navBar.css";

const NavBarComponent = () => {
    return (
        <React.Fragment>
            <NavBar>
                네비게이션 바 // html, css
                <Link to="/test">테스트로</Link>
            </NavBar>
        </React.Fragment>
    )
};

export default NavBarComponent;