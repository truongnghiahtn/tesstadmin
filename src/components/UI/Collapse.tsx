import React, { ReactNode } from "react";

interface ICollapse {
  //  collapsed: boolean;
  title: ReactNode;
  children: ReactNode;
}

const Collapse: React.FC<ICollapse> = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [height, setHeight] = React.useState(0);
  const collapseRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setHeight(collapseRef.current?.clientHeight || 0);
  }, []);

  return (
    <>
      <a
        className="nav-link collapsed"
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        {title}
        <div
          className={`sb-sidenav-collapse-arrow ${isCollapsed ? "" : "active"}`}
        >
          <i className="fas fa-angle-down" />
        </div>
      </a>
      <div
        className="collapse-content"
        aria-expanded={isCollapsed}
        style={{ maxHeight: isCollapsed ? 0 : height }}
      >
        <div ref={collapseRef}>{children}</div>
      </div>
    </>
  );
};

export default Collapse;
