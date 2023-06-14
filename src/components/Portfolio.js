import React from "react";
import dog from "../images/CatDogSearch.png";
import andrew from "../images/AndrewsList.png";
import game from "../images/GameNight.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container rounded bootcamp">
        <div className="row">
          <div class="container col-4 project">
            <img
              src={game}
              className="image border border-dark rounded"
              alt="Andrew"
            ></img>
            <div class="middle">
              <a href="https://game-night-1.herokuapp.com/" target="_blank">
                <div class="text">Visit Webpage</div>
              </a>
            </div>
            <div className="topRight">
              <a href="https://github.com/AMess33/GameNight" target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
          <div className="container col-8">
            <ul className="align-middle">
              <li>
                Game Night is an app to help create, track, and update your
                ongoing game nights.
              </li>
              <li>
                React.js, HTML, CSS, BootStrap, MaterialUI, Node.js, Express,
                MongoDB, GraphQL
              </li>
              <li>
                I created the React components, functionality, and style of
                Login, Signup, and Widgets, as well as setting up the Mongo
                Atlas DB and deploying to Heroku
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="container col-8">
            <ul>
              <li>
                Andrew’s List is a website for connecting homeowners and
                Contractors for the purpose of requesting and bidding on home
                improvement projects
              </li>
              <li>
                HTML, CSS, Bootstrap, Node.js, Express, REST API, MySQL,
                Sequelize, Handlebars.js
              </li>
              <li>
                My focus on this project was on the front end design and the
                implementation of Handlebars.js for our template engine along
                with Heroku deployment and team guidance.
              </li>
            </ul>
          </div>
          <div class="col-4 container project">
            <img
              src={andrew}
              className="image border border-dark rounded"
              alt="Andrew"
            ></img>
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
        </div>
        <div className="row m-2">
          <div class="col-4 container project">
            <img
              src={dog}
              className="image border border-dark rounded"
              alt="Dog"
            ></img>
            <div class="middle">
              <a
                href="https://zencoh.github.io/DogandCatSearchEngine/"
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
          <div className="container col-8">
            <ul>
              <li>
                Our search engine allows a user to select a cat or dog breed and
                is presented with a photo and useful information about the breed
              </li>
              <li>HTML, CSS, Bulma, Fetch APIs</li>
              <li>
                I implemented the Fetch API calls for dog images and information
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
