import React, { forwardRef } from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, setRef }) => {
  return (
    <div ref={setRef} className={isOpen ? "wrapper" : "close-wrapper"}>
      <div className={isOpen ? "content p-5" : "content-close p-5"}>
        <div className=" list-group">
          <a className="list-group-item list-group-item-action link-1">
            Hello world
          </a>
          <a className="list-group-item list-group-item-action link-2">
            Hello world
          </a>
          <a className="list-group-item list-group-item-action link-3">
            Hello world
          </a>
        </div>
        <div
          className={isOpen ? "card-section my-5" : "card-section-close my-5"}
        >
          <div className="card text-left">
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Test Transition</p>
              <hr className="my-4" />
              <button type="button" className="btn btn-primary">
                Hi!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
