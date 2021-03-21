import React from "react";
import Book from "./components/Book";
import { AddBookForm } from "./components/AddBookForm";
import { bookService } from "./rest/BookServices";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };

    this.addBook = this.addBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
  }

  //CRUD operations defined in BookServices
  refreshBooks = async () => {
    const books = await bookService.get();
    this.setState({ books });
  };

  componentDidMount() {
    this.refreshBooks();
  }

  addBook = async (book) => {
    await bookService.create(book);
    this.refreshBooks();
  };

  deleteBook = async (id) => {
    await bookService.delete(id);
    this.refreshBooks();
  };

  updateBook = async (book) => {
    await bookService.update(book);
    this.refreshBooks();
  };

  render() {
    let books = this.state.books.map((book) => {
      return (
        <Book
          {...book}
          //rest api endpoint uses ._id as object key for id
          key={book._id}
          //buttons
          deleteBook={this.deleteBook}
          updateBook={this.updateBook}
        />
      );
    });

    return (
      <div className="container">
        <div className="jumbotron" id="banner">
          <h1 className="display-3">My Book List</h1>
          <p className="lead">
            <span>A list of my favorite books.</span>
          </p>
        </div>
        <div className="container app">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h4>Add Book</h4>
                </div>
                <div className="card-body">
                  <AddBookForm addBook={this.addBook} />
                </div>
              </div>
              <br />
            </div>
            <div className="col-lg-2"></div>
            <div className="col">
              <div className="row">
                <div className="container">
                  {books}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
