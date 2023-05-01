import React from "react";

function NavItems({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavItems;
