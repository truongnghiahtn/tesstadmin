import React, { ReactNode } from "react";

interface ICollapse {
  //  collapsed: boolean;
  title: ReactNode;
  children: ReactNode;
}

const Collapse: React.FC<ICollapse> = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  return (
    <>
      <a
        className="collapse-button nav-link collapsed"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {title}
      </a>
      <div
        className={`collapse ${isCollapsed ? "" : "show"}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
};

export default Collapse;
