import React, { Component } from 'react';
import Book from './components/Book';

import './App.css';

class App extends Component {
  render() {
    return (
       <div className="App">
        <div className="App-header">
         <div>Story Time</div>
         </div>

        <h2>Your Books</h2>
        {/*
        <ul>
          <li>Treasure Island by Robert Louis Stevenson</li>
          <li>Go Dog Go by Dr.Seuss</li>
        </ul> */}
        <ul>
          <Book
            title="Treasure Island"
            author="Robert Louis Stevenson"
          />
          <Book
            title="Go Dog Go"
            author="Dr. Seuss"
          />
        </ul>
        {/*
        <form action="/">
          <input type="text" placeholder="Title"/>
          <input type="text" name="lastname" placeholder="Author"/>
          <input type="submit" value="Submit"/>
         </form> */}
      </div>
    );
  }
}

export default App;
