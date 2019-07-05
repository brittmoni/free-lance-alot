import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Tutorials from "../components/Tutorials/Tutorials"
import Navbar from '../components/Navbar/Navbar'

function LearningTutorials() {
  return (
    <div>
      <Navbar />
      <Tutorials />
      <Footer/>
    </div>
  )
}

export default LearningTutorials;