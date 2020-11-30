import React from "react";
import { Button, Lines, ProgressBar } from "../components";

export default function Home() {
  return (
    <>
      <div className="container py-4">
        <div className="col-12">
          <Button />
          <Lines />
          <ProgressBar />
        </div>
      </div>
    </>
  );
}
