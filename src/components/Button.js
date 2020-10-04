import React, { useState } from "react";
import "../styles/Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart, faBox } from "@fortawesome/free-solid-svg-icons";

export default function Button() {
  const [add, setAdd] = useState(false);
  return (
    <section>
      <h1>Buttons</h1>
      <hr />
      {/*button 1*/}

      <div className="py-3">
        <div className="button-1 mr-4">
          <div className="icon text-center">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </div>
          <span>Facebook</span>
        </div>
        <div className="button-1 mr-4">
          <div className="icon text-center">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </div>
          <span>Youtube</span>
        </div>
        <div className="button-1 mr-4">
          <div className="icon text-center">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </div>
          <span>Twitter</span>
        </div>
        <div className="button-1 mr-4">
          <div className="icon text-center">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </div>
          <span>Instagram</span>
        </div>
        <div className="button-1 mr-4">
          <div className="icon text-center">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </div>
          <span>Github</span>
        </div>
      </div>

      {/*button 2*/}
      <div className="my-2 d-flex text-center">
        <div className="button-2 mr-4">
          <div className="icon-2">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </div>
        </div>
        <div className="button-2 mr-4">
          <div className="icon-2">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </div>
        </div>
        <div className="button-2 mr-4">
          <div className="icon-2">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </div>
        </div>
        <div className="button-2 mr-4">
          <div className="icon-2">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </div>
        </div>
        <div className="button-2 mr-4">
          <div className="icon-2">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </div>
        </div>
      </div>

      {/*button 3*/}

      <div className="py-4 d-flex text-center">
        <div className="button-3 mr-4" onClick={() => setAdd(!add)}>
          <span className={add ? "add-to-cart clicked-3" : "add-to-cart"}>
            Add to Cart
          </span>
          <span className={add ? "added clicked-4" : "added"}>Added</span>
          <div className="icon-3">
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="lg"
              className={add ? "cart clicked-1" : "cart"}
            />

            <FontAwesomeIcon
              icon={faBox}
              size="lg"
              className={add ? "box clicked-2" : "box"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
