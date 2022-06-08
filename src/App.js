import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <MyInfoComponent />
      </header>
    </div>
  );
}

const MyInfoComponent = () => {
  const [myName, setMyName] = useState('Sarah');
  const [faveColor, setFaveColor] = useState('Blue');
  const [faveMovies, setFaveMovies] = useState(['Movie1', 'Movie2', 'Movie3']);
  return (
    <div>
      <p>{myName}</p>
      <p>{faveColor}</p>
      {/* <p>{faveMovies}</p> */}
      {faveMovies.map(movie => <span>{movie} &nbsp;</span>)}
      <br></br><br></br>
      <label>New Name &nbsp;
        <input type='text' onChange={(event) => {
          const newName = event.target.value;
          setMyName(newName)
        }
        }></input>
      </label><br></br>
      <label>New Color &nbsp;
        <input type='text' onChange={(event) => {
          const newColor = event.target.value;
          setFaveColor(newColor)
        }
        }></input>
      </label><br></br>
      <label>New Movie 1 &nbsp;
        <input type='text' onChange={(event) => {
          const newMovie = event.target.value;
          setFaveMovies([newMovie, faveMovies[1], faveMovies[2]])
        }}>
        </input>
      </label> &nbsp;
      <label>New Movie 2 &nbsp;
        <input type='text' onChange={(event) => {
          const newMovie = event.target.value;
          setFaveMovies([faveMovies[0], newMovie, faveMovies[2]])
        }}>
        </input>
      </label> &nbsp;
      <label>New Movie 3 &nbsp;
        <input type='text' onChange={(event) => {
          const newMovie = event.target.value;
          setFaveMovies([faveMovies[0], faveMovies[1], newMovie])
        }}>
        </input>
      </label>
    </div>
  )
}

export default App;
