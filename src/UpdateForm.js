import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
class UpdateForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.selectedBook);
        const updatedBook = {
            title: e.target.title.value || this.props.selectedBook.title,
            description: e.target.description.value || this.props.selectedBook.description,
            status: e.target.status.value || this.props.selectedBook.status,
            author: e.target.author.value || this.props.selectedBook.author,
            series: e.target.series.checked,
            _id: this.props.selectedBook._id
        }
        this.props.updateBooks(updatedBook);
        this.props.handleClose2();
    }
    render() {
        return (
        
        <Modal show={this.props.showModal2} onHide={this.props.handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "black"}}>Update Book</Modal.Title>
            </Modal.Header><Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"placeholder={this.props.selectedBook.title}/>
                    </Form.Group>

                    <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"placeholder={this.props.selectedBook.description} />
                </Form.Group>

                <Form.Group controlId ="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text"placeholder={this.props.selectedBook.status} />
                </Form.Group>

                <Form.Group controlId ="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text"placeholder= {this.props.selectedBook.author} />
                </Form.Group>

                <Form.Group controlId = "series">
                    <Form.Check type="checkbox" label="Is this book a series?" />

                </Form.Group>

                <Button type ="submit">Update Book</Button>
                    </Form >
                </Modal.Body >
            </Modal >
        )

    }
}
export default UpdateForm;