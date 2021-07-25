import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Main from "./pages/main/MainPage";
import NavBarPage from "./pages/commons/navBar";

function App() {
  return (
    <React.Fragment>
      {/* 상단 메뉴 바 */}
      <NavBarPage/> 
      
      <Router>
          <Switch>
            <Route path ="/">
              <Main />
            </Route>
          </Switch>
      </Router>
    </React.Fragment>
    
  );
}

export default App;
