import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card
          title="Card Title"
          image="https://vancouver.ca/images/cov/feature/corp-plan-landing.jpg"
          price={30}
        />
        <p>
          I'm learning react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
