import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, withRouter } from 'react-router-dom';

import Main from "./pages/main/MainPage";
import TestPage from "./pages/test/TestPage";

import NavBarPage from "./pages/commons/navBar";


function App() {
  

  return (
    <React.Fragment>
      <Router>
          <NavBarPage/> 

          
          <Switch> 
            <Route path ="/" exact component={Main}></Route>
            <Route path="/test" component={TestPage}></Route>
          </Switch>
      </Router>
      {/* 상단 메뉴 바 */}
    </React.Fragment>
    
  );
}

export default App;
