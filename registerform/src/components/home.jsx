import React from "react";
import logo from "./images/img1.jpg";

export default function Home() {
  return (
    <div>
      {/* <div classNameName="container-fluid text-light">
        "Not all of us can do great things. But we can do small things with
        great love."
      </div> */}
      <div className="row mt-5">
        <div className="ms-5 mt-5 ps-3 col-6 my-auto">
          <figure>
            <blockquote className="blockquote mb-4">
              <p>
                <i className="fas fa-quote-left fa-lg text-warning mb-5"></i>
                <span className="font-italic display-3 text-light">
                  Not all of us can do great things. But we can do small things
                  with great love.
                </span>
                <i className="fas fa-quote-right fa-lg text-warning mb-5"></i>
              </p>
            </blockquote>
            <figcaption className="row text-light ml-auto">
              <span className="col-6"></span>
              <span className="mr-0 block col-6">-Mother Terressa</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
