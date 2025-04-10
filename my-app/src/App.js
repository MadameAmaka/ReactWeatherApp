import Weather from './Weather'
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
