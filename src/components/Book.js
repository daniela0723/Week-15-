import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import EditBookForm from "./EditBookForm";

export default class Book extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.updateBook = this.updateBook.bind(this);
  }

  handleDeleteClick() {
    this.props.deleteBook(this.props._id);
  }

  updateBook(book) {
    this.props.update(book);
  }

  render() {
    return (
      <div className="book">
        <div className="card">
          <div className="card-body">
            <button
              className="btn btn-danger ml-2"
              id="delete"
              onClick={this.handleDeleteClick}
            >
              Delete
            </button>
            <h2 className="card-title">
              <em>{this.props.title}</em>
            </h2>
            <div id="bookInfo">
              <h5 className="card-subtitle">{this.props.author}</h5>
              <h5 className="card-subtitle">{this.props.year}</h5>
              <h5 className="card-subtitle">{this.props.genres}</h5>
            </div>
            <br />
            <hr />
            <EditBookForm {...this.props} updateBook={this.props.updateBook} />
          </div>
        </div>
        <br />
      </div>
    );
  }
}
