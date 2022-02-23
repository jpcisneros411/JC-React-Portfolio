import './App.css';
import './components/pages/AboutMe'
import AboutMe from './components/pages/AboutMe';
import MyContacts from './components/pages/ContactInfo';
import MyPortfolio from './components/pages/Portfolio';
import MyResume from './components/pages/Resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <href></href>
          <h1> Jason's React Portfolio </h1>        
        </p>
        <AboutMe></AboutMe>
        <MyContacts></MyContacts>
        <MyResume></MyResume>
        <MyPortfolio></MyPortfolio>
      </header>
    </div>
  );
}

export default App;
