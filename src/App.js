import './App.css';
import './components/pages/AboutMe'
import AboutMe from './components/pages/AboutMe';
import MyContacts from './components/pages/ContactInfo';
import MyPortfolio from './components/pages/Portfolio';
import MyResume from './components/pages/Resume';
//import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
//import 'bootstrap/dist/css/boostrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom";

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
    <ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="#home">My React Portfolio by JC</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#about">About Me</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#resume">My Resume</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#portfolio">My Portfolio</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#contacts">My Contacts</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
        <Router>
          <div className="container">  
          <Routes>
          <Route path="#about" component={AboutMe}/>
          <Route path="#resume" component={MyResume}/>
          <Route path="#portfolio" component={MyPortfolio}/>
          <Route path="#about" component={MyContacts}/>
          </Routes>
          </div>  
        </Router>
      
      

    </div>
        <Footer/>
    </div>
  );
}

export default App;
