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

    /* TODO: render all the books in a Carousel */

    return (
      <>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books > 0 && this.state.books.map((val, idx) => (
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="Empty no books"
              />
              <Carousel.Caption>
                <h3>{idx}</h3>
                <p>{val.title}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ))}


      </>
    );
  }
}

export default BestBooks;
