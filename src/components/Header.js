import React from "react";

export default function Header({ sidebar, setSideBar }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="nav navbar-nav">
        <a className="nav-item nav-link active" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link" href="#">
          Home
        </a>
        <div>
          <button
            type="button"
            className="btn btn-info w-100"
            onClick={e => {
              console.log("Hello");
              e.preventDefault();
              setSideBar(!sidebar);
            }}
          >
            Open Sidebar
          </button>
        </div>
      </div>
    </nav>
  );
}
