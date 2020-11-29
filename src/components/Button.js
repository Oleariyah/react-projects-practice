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
import {
  faShoppingCart,
  faBox,
  faThumbsUp,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import TwitterFav from "./TwitterFav";

export default function Button() {
  const [add, setAdd] = useState(false);
  const [login, setLogin] = useState(0);
  console.log(login);

  return (
    <section className="mb-4">
      <h1>Buttons & Emojis</h1>
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
      <div className="row">
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

        <div className="py-4 text-center">
          <div
            className="button-4 mr-4"
            onClick={() => setLogin(login !== 3 ? login + 1 : 0)}
          >
            <span className="mr-2">Login</span>
            <div className={login === 1 ? "lock login-clicked-1" : "lock"}>
              <div
                className={
                  login === 3
                    ? "lock-handle-curve login-clicked-3"
                    : login === 2
                    ? "lock-handle-curve login-clicked-2"
                    : "lock-handle-curve"
                }
              />
              <div
                className={
                  login === 3
                    ? "lock-handle login-clicked-3"
                    : login === 2
                    ? "lock-handle login-clicked-2"
                    : "lock-handle"
                }
              />
            </div>
          </div>
        </div>

        <div className="py-4 text-center">
          <div className="button-5 mr-4">
            <input type="checkbox" class="checkbox" id="checkbox" />
            <label for="checkbox">
              <TwitterFav />
            </label>
          </div>
        </div>

        <div className="py-4 d-flex text-center">
          <div className="button-6 mr-4">
            <span>
              <span className="d-flex justify-content-center align-items-center m-1">
                <span className="like-button d-flex justify-content-center align-items-center mr-1">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{ color: "white" }}
                    className="like"
                  />
                </span>
                <span className="love-button d-flex justify-content-center align-items-center mr-1">
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "white" }}
                    className="love"
                  />
                </span>
                <span className="face-emoji d-flex justify-content-center align-items-center mr-1">
                  <div className="face">
                    <div className="eyes" />
                    <div className="mouth">
                      <div className="tongue" />
                    </div>
                  </div>
                </span>
                <span className="face-emoji d-flex justify-content-center align-items-center mr-1">
                  <div className="face-wow">
                    <div className="eyebrows" />
                    <div className="wow-eyes" />
                    <div className="wow-mouth" />
                  </div>
                </span>
                <span className="face-emoji d-flex justify-content-center align-items-center mr-1">
                  <div className="face-sad">
                    <div className="sad-eyebrows" />
                    <div className="sad-eyes" />
                    <div className="sad-mouth" />
                  </div>
                </span>
                <span className="angry-emoji d-flex justify-content-center align-items-center mr-1">
                  <div className="face-angry">
                    <div className="angry-eyebrows" />
                    <div className="angry-eyes" />
                    <div className="angry-mouth" />
                  </div>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
