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
          <div className="Shadow-Spin">
            <image>
              <source srcSet={portrait} type="image/avif" />
              <source srcSet={portraitFallback} type="image/webp" />
              <img src={portraitFallback} className="App-logo" decoding="async" loading="lazy" alt="" />
            </image>
          </div>
        </a>
      </header>
    </div>
  );
}

export default App;
