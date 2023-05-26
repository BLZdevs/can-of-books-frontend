import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import musashi from './musashi.jpg';
import love from './love.jpg';
import presence from './presence.jpg';
import PostForm from './PostForm';
import './BestBook.css';
import { Button } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookImage: [musashi, love, presence]
    };
  }

  componentDidMount() {
    this.pullBooks();
  }

  pullBooks = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/getBooks`);
      if (this.state.books === 0) {
        console.log("messed up");
      }
      else {
        console.log(response.data);
        this.setState({ books: response.data });
      }
    }
    catch (err) {
      console.error(err);
    }
    
  };

  postBooks = async (newBook) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/getBooks`, newBook);
      this.setState({ books: [...this.state.books, response.data] }, () => console.log(this.state.books));
    }
    catch (err) {
      console.error(err);
    }
  };

  deleteBooks = async (bookToDelete) => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/getBooks/${bookToDelete._id}`;
      await axios.delete(url);
      const updatedBooks = this.state.books.filter(element => element._id !== bookToDelete._id);
      this.setState({books:updatedBooks});
      console.log(updatedBooks);
    }
    catch (err) {
      console.error(err);
    }
  };

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <PostForm postBooks={this.postBooks} />
        {this.state.books.length > 0 && (
          <Carousel>
            {this.state.books.map((book, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  id='coverPhoto'
                  src={idx < 3 ? this.state.bookImage[idx] : this.state.defaultImg}
                  alt={book.title}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>By {book.author}</p>
                  <p>{book.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
    <Button onSubmit={this.deleteBooks}>Delete</Button>
      </>
    );
  }
}

export default BestBooks;
