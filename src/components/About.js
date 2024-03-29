import React from "react";
import headshot from "../images/1684878627425.jpeg";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img src={headshot} className="border rounded" />
          </div>
          <div className="col-md-8 col-sm-12">
            <p className="aboutMeText ">
              {" "}
              Hi! My name's Andrew and I'm a software engineer specializing in
              full-stack JavaScript. I enjoy collaborating on innovative
              projects and using my creativity and problem solving skills to
              bring applications to life. When I'm not coding, I enjoy playing
              with my dog, rooting for my local Kansas City sports teams, and
              watching movies. Let's connect!
            </p>
            <ul className="icons">
              <li>
                <a href="https://github.com/AMess33" target="_blank">
                  <i className="tiny material-icons">person_outline</i> @AMess33
                </a>
              </li>
              <li>
                <a href="mailto:amess3309@gmail.com" target="_blank">
                  <i className="tiny material-icons">email</i>{" "}
                  amess3309@gmail.com
                </a>
              </li>
              <li>
                <i className="tiny material-icons">place</i> Kansas City, MO
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
