import React from "react";

export default class EditBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //rest api endpoint generates a unique id for each book object (._id)
      _id: props._id,
      title: props.title,
      author: props.author,
      year: props.year,
      genres: props.genres,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    this.props.updateBook(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <div className="edit-book-form">
        <h5 id="editFormHeader">Edit Book</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="titleInput">Title:</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={this.state.title}
              id="titleInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="authorInput">Author:</label>
              <input
                className="form-control"
                type="text"
                name="author"
                value={this.state.author}
                id="authorInput"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="yearInput">Year:</label>
            <input
              className="form-control"
              type="text"
              name="year"
              value={this.state.year}
              id="yearInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="yearInput">Genres:</label>
            <input
              className="form-control"
              type="text"
              name="genres"
              value={this.state.genres}
              id="genresInput"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button type="submit" className="btn form-control" id="editbtn">
            Update
          </button>
        </form>
      </div>
    );
  }
}
