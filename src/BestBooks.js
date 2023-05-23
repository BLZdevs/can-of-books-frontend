import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


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
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/getBooks`);
      if (this.state.books === 0) {
        console.log("messed up");
      }
      else {
        console.log(response.data);
        this.setState({ books: response.data});
      }
    }
    catch (err) {
      console.log(err);
    }

  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
  
        {this.state.books.length > 0 && (
          <Carousel>
            {this.state.books.map((book, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={book.image} 
                  alt="Book cover"
                />
                <p>{book.author}</p> 
                <Carousel.Caption>
                  <h3>{book.title}</h3> 
                  <p>{book.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </>
    );
  }
}

export default BestBooks;
