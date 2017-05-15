import React, { Component } from 'react';
import '../Book.css';


class Book extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  }
  constructor(props) {
  super(props);

  this.state = {
    favorited: false,
  };
 }

 onClikFavorite = () => {
   this.setState({
     favorited: !this.state.favorited,
   });
 }

  render() {
   const favoriteClass = this.state.favorited ? "enabled" : "";
    return (
      <li className="book">
       <div>
         <span
           className={`favorite ${favoriteClass}`}
           onClick={this.onClikFavorite}
         />
        {this.props.title}
        </div>
        <div className="description">
          {this.props.description}
        </div>
      </li>
    );
  }
}

export default Book;
