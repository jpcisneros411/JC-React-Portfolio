import './App.css';
import './components/AboutMe'
import AboutMe from './components/AboutMe';
import MyContacts from './components/ContactInfo';
import MyPortfolio from './components/Portfolio';
import MyResume from './components/Resume';

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
