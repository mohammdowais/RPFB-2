import React from "react";
import logo from "./images/img1.jpg";

export default function Home() {
  return (
    <div>
      {/* <div classNameName="container-fluid text-light">
        "Not all of us can do great things. But we can do small things with
        great love."
      </div> */}
      <div className="row mt-5 mx-auto">
        <div className="ms-lg-5 mt-lg-5 ms-xs-3 ms-md-3 mt-xs-3 mt-md-3 ps-3 col-lg-6  my-auto">
          <figure>
            <blockquote className="blockquote mb-4">
              <p>
                <i className="fas fa-quote-left fa-lg text-warning mb-5"></i>
                <span className="font-italic display-5 text-light">
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
