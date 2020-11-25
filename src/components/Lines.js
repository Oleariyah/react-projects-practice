import React from "react";
import "../styles/Lines.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Lines() {
  return (
    <section className="mb-4">
      <h1>Lines & Shapes</h1>
      <hr />
      <div className="col-12">
        <div className="row py-4">
          <div className="col-2 text-center">
            <div className="horizontal-line py-2" />
          </div>
          <div className="col-2 text-center">
            <div className="round-line py-2" />
          </div>
          <div className="col-2 text-center">
            <div className="box-loading-line py-2" />
          </div>
          <div className="col-2 text-center">
            <div className="box-line py-2" />
          </div>
          <div className="col-2 text-center">
            <img
              src="./images/star.svg"
              alt="star"
              height="60"
              width="60"
              className="loading"
            />
          </div>
          <div className="col-2 text-center">
            <FontAwesomeIcon icon={faSpinner} size="4x" className="loading" />
          </div>
        </div>

        {/*second row*/}

        <div className="row py-4">
          <div className="col-2 text-center">
            <div className="draw-line" />
          </div>
          <div className="col-2 text-center">
            <div className="d-flex justify-content-center">
              <div className="draw-line" />
            </div>
          </div>
          <div className="col-2 text-center">
            <img
              src="./images/star.svg"
              alt="star"
              height="60"
              width="60"
              className="box-loading-line"
            />
          </div>
          <div className="col-2 text-center">
            <img
              src="./images/star.svg"
              alt="star"
              height="60"
              width="60"
              className="shining"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
