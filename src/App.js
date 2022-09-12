import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './Components/FirstComponent';
import { SecondComponent } from './Components/SecondComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Created by Jeorje
        </p>
        <FirstComponent />
        <SecondComponent />
      </header>
    </div>
  );
}

export default App;
