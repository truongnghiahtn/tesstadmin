import * as React from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [showSidebar, setShowSidebar] = React.useState(true);

  const toggleSidebar = () => {
    setShowSidebar((pre) => !pre);
  };

  return (
    <React.Fragment>
      <div
        className={
          showSidebar ? "sb-nav-fixed" : "sb-nav-fixed sb-sidenav-toggled"
        }
        id="nav-fix"
      >
        <Header toggle={toggleSidebar} />
        <Sidebar show={showSidebar} />
      </div>
    </React.Fragment>
  );
};
export default App;
