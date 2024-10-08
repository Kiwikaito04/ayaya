import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Header />
      <div
        class="row justify-content-center align-items-center g-2"
      >
        <div class="col"> <Product /> </div>
        <div class="col"> <Product /> </div>
        <div class="col"> <Product /> </div>
      </div>
      
      
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
      </div> */}
    </div>
      
  
    
  );
}

export default App;
