import React, { useState } from "react";

//Uses hooks

export const AddBookForm = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genres, setGenres] = useState("");

  const handleSubmit = (e) => {
    props.addBook({ title, author, year, genres });
    e.preventDefault();
    //Clear form after user submits it
    setTitle("");
    setAuthor("");
    setYear("");
    setGenres("");
  };

  return (
    <div className="add-book-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="title"
            value={title}
            id="titleInput"
            placeholder="Title"
            autoComplete="off"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="author"
              value={author}
              id="authorInput"
              placeholder="Author"
              autoComplete="off"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="year"
            value={year}
            id="yearInput"
            placeholder="Year"
            autoComplete="off"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="genres"
            value={genres}
            id="genresInput"
            placeholder="Genre(s)"
            autoComplete="off"
            onChange={(e) => setGenres(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn form-control" id="addbtn">
          Add
        </button>
      </form>
      <br />
    </div>
  );
};
