import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";

import Main from "../../components/main/MainComponent";
import TestPage from "../test/TestPage";

const MainPage = (props) => {
    
    // const match = useRouteMatch();

    return (
        <Main/>
    );
}

export default  MainPage;