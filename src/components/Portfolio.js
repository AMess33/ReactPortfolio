import React from "react";
import dog from "../images/CatDogSearch.png";
import andrew from "../images/AndrewsList.png";
import game from "../images/GameNight.png";
import poker from "../images/Poker Roll History copy.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container rounded bootcamp">
        <div className="row overflow-auto">
          <div class="container col-md-4 col-sm-12 project">
            <img
              src={poker}
              className="image border border-dark rounded"
              alt="PokerRoll"
            ></img>
            <div class="middle">
              <a href="https://pokerroll.fly.dev/" target="_blank">
                <div class="text">Visit Webpage</div>
              </a>
            </div>
            <div className="topRight">
              <a href="https://github.com/AMess33/PokerRoll" target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
          <div className="container col-sm-12 col-md-8">
            <br />
            <ul className="align-middle">
              <li>
                Poker Roll allows you to track, update, and manage your poker
                bankroll and all your poker sessions.
              </li>
              <li>
                React.js, HTML, CSS, MaterialUI, Node.js, Express, MongoDB,
                RESTFul API, Clerk, Fly.io
              </li>
              <li>Responsible for entire codebase</li>
            </ul>
          </div>
        </div>
        <div className="row overflow-auto">
          <div class="container col-md-4 col-sm-12 project">
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
          <div className="container col-sm-12 col-md-8">
            <br />
            <ul className="align-middle">
              <li>
                Game Night allows you to create, track, and update your ongoing
                game nights.
              </li>
              <li>
                React.js, HTML, CSS, BootStrap, MaterialUI, Node.js, Express,
                MongoDB, GraphQL
              </li>
              <li>
                Created the React components, functionality, and style of Login,
                Signup, and Widgets. Additionally, I set up and managed our
                KANBAN board, as well as the Mongo Atlas DB and deployed the app
                to Heroku.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-top">
          <div className="container col-sm-12 col-md-8">
            <br />
            <ul>
              <li>
                Andrew’s List connects homeowners and Contractors to request and
                bid on home improvement projects
              </li>
              <li>
                HTML, CSS, Bootstrap, Node.js, Express, REST API, MySQL,
                Sequelize, Handlebars.js
              </li>
              <li>
                Developed the front end design and implemented Handlebars.js as
                our template engine
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-12 container project">
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
        <div className="row border-top">
          <div class="col-md-4 col-sm-12 container project">
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
          <div className="container col-sm-12 col-md-8">
            <br />
            <ul>
              <li>
                Select a Breed of Cat or Dog and see a photo and interesting
                facts about that breed
              </li>
              <li>HTML, CSS, Bulma, Fetch APIs</li>
              <li>
                Implemented the Fetch API calls for dog images and information
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
