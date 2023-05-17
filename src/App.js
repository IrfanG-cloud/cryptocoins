import logo from './logo.svg';
import './App.css';
import Coins from './components/Coins/Coins';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Crypto Coins Exchanger</h1>
        <Coins />
      </header>
    </div>
  );
}

export default App;
