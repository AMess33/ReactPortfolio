import React from "react";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className="container display-flex resumeBoxes">
        <div className="row">
          <ul className="col-md-3 col-sm-12 icons">
            <li>
              <a
                href="https://docs.google.com/document/d/1UC0OCgNlM22cmg_NkxspxJTwd0IkPB8XkdoeQ3RjN5Q/edit?usp=sharing"
                target="_blank"
              >
                <i className="tiny material-icons">list_alt</i> Resume
              </a>
            </li>
            <li>
              <a href="https://github.com/AMess33" target="_blank">
                <i class="bi bi-github"></i> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/amesser33/" target="_blank">
                <i class="bi bi-linkedin"></i> Linked In
              </a>
            </li>
          </ul>
          <div className="col-md-9 col-sm-12">
            <h3>
              {" "}
              <i className="tiny material-icons">code</i> Technical Skills
            </h3>
            <div className="container jobs border rounded border-dark">
              <p>
                <span className="fw-bold">Languages:</span> JavaScript, HTML,
                CSS
              </p>
              <p>
                <span className="fw-bold">Frontend Technologies:</span> React,
                Bootstrap, jQuery, Handlebars.js, JWT
              </p>
              <p>
                <span className="fw-bold">Backend Technologies:</span> RESTful
                API, Node.js, Express.js, Heroku, Bcrypt, MySql, Sequelize,
                MongoDB, Mongoose, Apollo Client, GraphQL
              </p>
            </div>
            <br />
            <h3>
              <i className="tiny material-icons">library_books</i> Education
            </h3>
            <div className="container education border rounded border-dark">
              <h4>
                University of Kansas
                <h6>Full Stack Web Development - Coding Bootcamp</h6>
                <p className="subheader"> Nov 2022 - May 2023</p>
              </h4>
            </div>
            <br />
            <h3>
              {" "}
              <i className="tiny material-icons">work</i> Professional
              Experience
            </h3>
            <div className="container jobs border rounded border-dark">
              <h4>
                EPC Inc.
                <span className="subheader"> Aug 2021 - Nov 2022</span>
                <h6>Project Coordinator</h6>
              </h4>
              <ul className="bulletPoints">
                <li>
                  Developed Excel reports for client review of received
                  inventory, ensuring accuracy and efficiency.
                </li>
                <li>
                  Managed a 6-month discrepancy report, providing weekly updates
                  to clients for inventory reconciliation.
                </li>
                <li>
                  Successfully maintained workflow during a transition period,
                  adapting to a reduced team size.
                </li>
              </ul>
              <h4>
                EPC Inc.
                <span className="subheader"> May 2012 - Aug 2021</span>
                <h6> ITAD Field Tech</h6>
              </h4>
              <ul className="bulletPoints">
                <li>
                  Traveled nationwide to various job sites and served diverse
                  customers, demonstrating flexibility and adaptability.
                </li>
                <li>
                  Implemented Data Erasure processes on client hardware prior to
                  removal.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
