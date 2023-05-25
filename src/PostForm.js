import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';

class PostForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      series: e.target.series.value,
      status: e.target.status.value,
      author: e.target.author.value
    };

    this.props.postBooks(newBook);
  };
  render() {

    return (
      <Container>

        <Form onsubmit={this.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="What is the name of your book?" />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="What is the plot of your book?" />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="Is this book completed?" />
          </Form.Group>
          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Who wrote the book?" />
          </Form.Group>
          <Form.Group controlId="series">
            <Form.Label>Series</Form.Label>
            <Form.Check type="checkbox" placeholder="Is this book a series?" />
          </Form.Group>

          <Button type="submit" >Add Book</Button>

        </Form>

      </Container>

    );
  }
}

export default PostForm;
