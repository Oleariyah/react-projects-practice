import React from "react";
import { Link } from "react-router-dom";

export default function Header({ sidebar, setSideBar }) {
  return (
    <nav className=" navbar navbar-expand navbar-light bg-light">
      <div className="nav navbar-nav">
        <Link className="nav-item nav-link active" to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
        <div>
          <button
            type="button"
            className="btn btn-secondary w-100"
            onClick={e => {
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
