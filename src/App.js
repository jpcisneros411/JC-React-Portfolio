import './App.css';
import './components/pages/AboutMe'
import AboutMe from './components/pages/AboutMe';
import MyContacts from './components/pages/ContactInfo';
import MyPortfolio from './components/pages/Portfolio';
import MyResume from './components/pages/Resume';
//import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
        
        
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
