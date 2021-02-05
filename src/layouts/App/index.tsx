import * as React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";

interface IAppProps {
}




const App: React.FunctionComponent<IAppProps> = (props) => {
return <React.Fragment>
{/* <Switch>
  <Route path="/login" exact component={Login} />
  <Route path="/admin" component={AdminPage} />
</Switch> */}
<div className="sb-nav-fixed" id="nav-fix">
  <Header/>
  <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
        Wellcome
        </div>
        
  </div>
</div>
</React.Fragment>
}
export default App