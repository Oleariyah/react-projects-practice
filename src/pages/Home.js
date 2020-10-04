import React, { useRef } from "react";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";

export default function Home({ sidebar, setRef, setSideBar }) {
  return (
    <>
      {sidebar && <Sidebar isOpen={sidebar} ref={setRef} />}
      <div className="container py-4">
        <div className="col-12">
          <Button />
        </div>
      </div>
    </>
  );
}
