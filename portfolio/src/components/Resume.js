import React from "react";

export default function Resume() {
  return (
    <div className="display-flex">
      <h1>Resume</h1>
      <div className="container resumeBoxes">
        <ul className="col s12 m4 icons">
          <li>
            <a href="https://docs.google.com/document/d/1UC0OCgNlM22cmg_NkxspxJTwd0IkPB8XkdoeQ3RjN5Q/edit?usp=sharing">
              <i className="tiny material-icons">list_alt</i> Resume
            </a>
          </li>
          <li>
            <a href="https://github.com/AMess33">
              <i class="bi bi-github"></i>GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amesser33/">
              <i class="bi bi-linkedin"></i> Linked In
            </a>
          </li>
        </ul>
        <div className="container resumeContent">
          <h3>
            {" "}
            <i className="tiny material-icons">work</i> Professional Experience
          </h3>
          <div className="container jobs">
            <h4>
              EPC Inc.
              <span className="subheader"> Aug 2021 - Nov 2022</span>
              <h6>Project Coordinator</h6>
            </h4>
            <ul className="bulletPoints">
              <li>
                Built Excel reports for client review of received inventory vs.
                expected inventory.
              </li>
              <li>
                Maintained 6 month discrepancy report for weekly review by
                client
              </li>
              <li>
                Sustained workflow when transitioning from 4 to 3 employees on
                our client account team
              </li>
            </ul>
            <h4>
              EPC Inc.
              <span className="subheader"> May 2012 - Aug 2021</span>
              <h6> ITAD Field Tech</h6>
            </h4>
            <ul className="bulletPoints">
              <li>
                Maintained a clean driving record as an over the road box truck
                driver
              </li>
              <li>
                Traveled the country for various jobs and customers when
                requested
              </li>
              <li>
                Delivered a vehicle and worked in the Florida region for 3 weeks
                for off duty coworker
              </li>
            </ul>
          </div>
        </div>
        <div className="container ">
          <h3>
            <i className="tiny material-icons">library_books</i> Education
          </h3>
          <div className="container education">
            <h4>
              University of Kansas Coding Bootcamp
              <h6>Full Stack Web Development</h6>
              <p className="subheader"> Nov 2022 - May 2023</p>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
