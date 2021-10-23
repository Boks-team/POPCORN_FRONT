import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./navBar.css";

const NavBarComponent = () => {
    return (
        <React.Fragment>
            <NavBar>
                <div id="names">
                    <Link to="/">홈</Link>
                    <Link to="/test">테스트로</Link>
                    <Link to="/board">게시판</Link>
                </div>
            </NavBar>
        </React.Fragment>
    )
};

export default NavBarComponent;