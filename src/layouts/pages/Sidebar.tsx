import * as React from "react";
import Collapse from "src/components/UI/Collapse";
interface ISidebarProps {
  show: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ show }) => {
  return (
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <a className="nav-link" href="index.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                Dashboard
              </a>
              <div className="sb-sidenav-menu-heading">Interface</div>
              <Collapse
                title={
                  <>
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-columns" />
                    </div>
                    Layouts
                  </>
                }
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <a className="nav-link" href="layout-static.html">
                    Static Navigation
                  </a>
                  <a className="nav-link" href="layout-sidenav-light.html">
                    Light Sidenav
                  </a>
                </nav>
              </Collapse>
              <Collapse
                title={
                  <>
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-book-open" />
                    </div>
                    Pages
                  </>
                }
              >
                <nav
                  className="sb-sidenav-menu-nested nav accordion"
                  id="sidenavAccordionPages"
                >
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#pagesCollapseAuth"
                    aria-expanded="false"
                    aria-controls="pagesCollapseAuth"
                  >
                    Authentication
                  </a>
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#pagesCollapseError"
                    aria-expanded="false"
                    aria-controls="pagesCollapseError"
                  >
                    Error
                  </a>
                </nav>
              </Collapse>
              <div className="sb-sidenav-menu-heading">Addons</div>
              <a className="nav-link" href="charts.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-chart-area" />
                </div>
                Charts
              </a>
              <a className="nav-link" href="tables.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-table" />
                </div>
                Tables
              </a>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">Wellcome</div>
    </div>
  );
};
export default Sidebar;
