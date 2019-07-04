import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import { Link } from 'react-router-dom';
import "./Tutorials.css";
import Button from 'react-bootstrap/Button';


// depending on the current path, this component sets the "active" className on the appropriate navigation link item
const Tutorials = props =>
    <div className="container">
        <div className="featured">
            <div className="title">
                <h3>Brush up on or learn new some new material.</h3>
                <hr></hr>
            </div>
            {/*---- Tutorial 1----- */}
            <div className="row">
                <br></br>
                <h4>freeCodeCamp</h4>
                <p>We are looking for a remote US based full-stack Javascript developer with experience using
                React, Node.JS, Socket.io, and AWS.
                You'll be adding exciting new features to our live chat and chatbot platform (getgobot.com) and expanding integrations with third-party platforms like Shopify and Facebook. Experience with Shopify and Facebook API's is a plus. You will be working directly with both Co-Founders and the CTO.
            </p>
            </div>

            {/* -------Tutorial 2 --------*/}
            <br></br>
            <div className="row">
                <h4>Web Designer</h4>
                <p>Intersect Digital is looking for a professional Web Designer with experience in content management systems to take over the graphic and user interface design of clients' website. We're looking for a candidate who has created and maintained functional, attractive websites.
                Incorporate changes recommended by the clients into the final design
    Create asset building template files for front-end developers or junior designers to use
    Implement and maintain high-quality UX best practices and incorporate them with content produced for the website - Create mock-ups for proposed project pages and update them as needed
    Requirements:

    Bachelor's in Computer Science, Graphic Design or related field, or 3+ years' additional experience.
    The ability to work with minimal supervision, while delivering meticulous designs;
    Advanced Photoshop and Illustrator skills.
    Strong vision for mobile Internet consumer products, clear understanding of usability, user-centered design, accessibility and web standards.
    Professional portfolio with at least 5 designs for internal review.
    Must be comfortable working in a quick paced organization.
    Applicants must be authorized to work in the United States without the need for a sponsor.
    Compensation:

    $150 per hour (fixed price)</p>

           
                <br></br>
                {/* -------JOB 3 section ----------- */}
                <div class="row">
                    <h4>Front-end developer to assist on web app (HTML, CSS)</h4>
                    <br></br>
                    <hr></hr>
                    <p className="description">We are looking for a front-end developer to help us finish up a web application. The application is developed in .net core,
        and the client portion is a mix of custom javascript, Kendo UI controls,
        and typescript. You would work with our lead web developer to implement pages based on existing templates and wire-frames. An example would be vendor page, where a user can add/edit vendor's in the system. The lead developer would be available to help with any questions, as well as review any code as necessary.

        We are looking for someone we can send our mockups\wireframes and existing CSS. We would expect a 48 hr turn around which should include HTML file and any related CSS.

        If successful, we will send you the remaining 14 pages we would like to have created in this manner. So we know you read the description and understand, please type "I'm available" in your response.

        You should be comfortable with the following technologies:

        HTML
CSS</p>
                  
                </div>
            </div>
        </div>
        





        export default Tutorials;