import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css";
import * as firebase from "firebase"
import Login from "../../pages/Login"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Button from 'react-bootstrap/Button';

// depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
    return (
        <div className="navbar navbar-expand-lg navbar-light fixed-top animated fadeIn delay-1s">
            <div class="container">
                <div className="navbar-brand"><a href="/home"><img src="https://i.imgur.com/xzUGBaC.jpg" className="brand" alt="Logo" /></a> </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                            <a class="nav-link" href="/home">Home
                            </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/jobs">Find Jobs
                            </a>
                        </li>
                        {/* <li class="nav-item active">
                            <a class="nav-link" href="/">Log In</a>
                        </li> */}

                        <li class="nav-item active">
                            <a className="nav-link" href="/postjob">
                                Post Job
                            </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/profile">Profile
                            </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/Tutorials">Tutorials
                            </a>
                        </li>
                        {/* <li class="nav-item inactive">
                            <Button><a href="/"onClick={() => firebase.auth().signOut()} id="signOut" data-toggle="modal" data-target="#exampleModal" text="Sign Out">Sign Out</a> 
                            </Button>
                        </li> */}
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <form class="form-inline my-2 my-lg-0">
                        <div id="welcomeText"><h2>{"Welcome, " + sessionStorage.getItem("freelancerName")}  <img src={sessionStorage.getItem("freelancerPic")} width="50px" height="50px" /></h2></div>
                        <ul>
                            <li class="nav-item inactive">
                                <Button><a href="/"onClick={() => firebase.auth().signOut()} id="signOut" data-toggle="modal" data-target="#exampleModal" text="Sign Out">Sign Out</a> 
                                </Button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
