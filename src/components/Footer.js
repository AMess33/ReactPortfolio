import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://github.com/AMess33">
          <i className="bi bi-github"></i>
        </a>
        &nbsp;
        <a href="https://www.linkedin.com/in/amesser33/">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <div>
        <p className="copyright">
          <i className="tiny material-icons">copyright</i> 2023 Andrew Messer
        </p>
        <p>Designed with Bootstrap</p>
        <p>
          Images by{" "}
          <a href="https://www.freepik.com/free-photo/abstract-paper-background-concept_11904356.htm#page=2&query=portfolio%20background&position=17&from_view=search&track=robertav1_2_sidr">
            Freepik
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
