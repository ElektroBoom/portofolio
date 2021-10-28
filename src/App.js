import portrait from './portrait.avif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://github.com/ElektroBoom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={portrait} className="App-logo" alt="logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
