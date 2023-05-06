import React from "react";
import dog from "../images/CatDogSearch.png";
import andrew from "../images/AndrewsList.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="row">
        <div class="container col-md-6 project">
          <img src={andrew} className="image" alt="Andrew"></img>
          <div class="middle">
            <a href="https://andrews-list.herokuapp.com/" target="_blank">
              <div class="text">Visit Webpage</div>
            </a>
          </div>
          <div className="topRight">
            <a href="https://github.com/AMess33/AndrewsList" target="_blank">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>
        <div class="container col-md-6 project">
          <img src={dog} className="image" alt="Dog"></img>
          <div class="middle">
            <a
              href="https://zencoh.github.io/soCrazyGroupProject/"
              target="_blank"
            >
              <div class="text">Visit Webpage</div>
            </a>
          </div>
          <div className="topRight">
            <a
              href="https://github.com/zencoh/soCrazyGroupProject"
              target="_blank"
            >
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
