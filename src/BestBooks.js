import axios from 'axios';
import React from 'react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    this.pullBooks();
  }

  async pullBooks() {
    try{
      const response = await axios.get('http://localhost:3001/books');
      this.setState({books: response.data});
    }
      catch(err) {
        console.log(err);
      }
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
