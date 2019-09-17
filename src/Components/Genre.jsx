import React, { Component } from 'react';


class Genre extends Component {
    state = {  }
    render() { 
        return (  <div></div>);

getGenre = async (genre) => {
    var res = await fetch("http://localhost:3000/books?category=" + genre);
    var books = await res.json();
    this.setState({ books: books });
  }

  componentDidUpdate = async oldProps => {
    console.log(oldProps);
    if (oldProps.genre != this.props.genre || oldProps.searchQuery != this.props.searchQuery) {
      var url = BASE_URL + "books?category=" + this.props.genre;
      if (this.props.searchQuery && this.props.searchQuery.length >= 3) url += "&title=" + this.props.searchQuery;

      var res = await fetch(url);
      var books = await res.json();
      this.setState({ books: books });
    }

}
}
 
export default Genre;