require('dotenv').config()
import React, { Component } from 'react';
import Book from './components/Book';
import Add from './components/Add';
import './App.css';


class App extends Component {

 constructor(props){
   super(props);

   this.state = {
     books: [
       {
         title: 'Treasure Island',
         description: 'Pirates and stuff, arr!',
         author: 'Robert Louis Stevenson',
       },
       {
         title: 'Go Dog Go',
         description: 'A riveting tale of the fast paced life of the modern canine.',
         author: 'Dr. Seuss'
       }
     ],
   };
 }

 onAddBook = (book) => {
   this.setState({
     books: this.state.books.concat([book])
   });
 }

  render() {
    return (
       <div className="App">
        <div className="App-header">
         <div>Story Time</div>
         </div>
          <h2>Your Books</h2>

          <Add onAdd={this.onAddBook} />

          <ul>
           {
             this.state.books.map(book =>
               <Book
                 key={book.title}
                 title={book.title}
                 author={book.author}
                 description={book.description}
               />
             )
           }
        </ul>

      </div>
    );
  }
}

export default App;
