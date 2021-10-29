import portrait from './portrait.avif';
import portraitFallback from './portrait_fallback.webp';
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
          <image>
            <source srcSet={portrait} type="image/avif" />
            <source srcSet={portraitFallback} type="image/webp" />
            <img src={portraitFallback} className="App-logo" decoding="async" loading="lazy" alt="Iulian Oancea profile picture" />
          </image>
        </a>
      </header>
    </div>
  );
}

export default App;
