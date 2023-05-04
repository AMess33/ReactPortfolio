import React from "react";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="container display-flex">
        <ul className="col s12 m4 icons">
          <li>
            <a href="https://github.com/AMess33">
              <i className="tiny material-icons">person_outline</i> @AMess33
            </a>
          </li>
          <li>
            <a href="mailto:amess3309@gmail.com">
              <i className="tiny material-icons">email</i> amess3309@gmail.com
            </a>
          </li>
          <li>
            <i className="tiny material-icons">place</i> Kansas City, MO
          </li>
        </ul>
        <div className="container display-flex">
          <p className="aboutMeText">
            {" "}
            Hi! My name's Andrew and I'm a software engineer specializing in
            full-stack JavaScript. I enjoy collaborating on innovative projects,
            using my creativity and problem solving skills to bring applications
            to life. When I'm not coding, I enjoy playing with my dog, Taco,
            rooting for my local Kansas City sports teams, and watching movies.
            Let's connect!
          </p>
        </div>
      </div>
    </div>
  );
}
