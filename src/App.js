import logo from './logo.svg';
import './App.css';

function App() {

  const number = 555
  const singer = {
    name: 'Dr, Mahfuz',
    job: 'Singer',
  }
  const singer2 = {
    name:'Eva Rahman',
    job:'kokil konthi gaan er pakhi'
  }
  const singerStyle = {
    backgroundColor: 'black',
    color: 'white',
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
        <p>my number is : {number}</p>
        <p style={
          {
            backgroundColor: 'black',
            color: 'white',
          }
        }>Singer: {singer.name + " " + singer.job}</p>
        <p style={singerStyle}>Real singer: {singer2.job}</p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React And other things
        </a>
        <p>hululu</p>
      </header>
    </div>
  );
}

export default App;
