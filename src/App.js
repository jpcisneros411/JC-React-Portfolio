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

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
    <ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#link">Link</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Divider />
          <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
        
          <href></href>
          <h1> Jason's React Portfolio </h1>        
        
        <AboutMe></AboutMe>
        <MyContacts></MyContacts>
        <MyResume></MyResume>
        <MyPortfolio></MyPortfolio>
    </div>
        <Footer/>
    </div>
  );
}

export default App;
