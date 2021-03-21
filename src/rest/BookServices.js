const BOOKS_ENDPOINT =
  //Temp api endpoint 10 days
  //Resource name = "books"
  "https://crudcrud.com/api/10f8feb950a745428599059576a23030/books";

//CRUD Operations
class BookService {
  create = async (book) => {
    try {
      const resp = await fetch(`${BOOKS_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      return resp;
    } catch (e) {
      console.log(`An error ocurred while creating the book: ${e}`);
    }
  };

  get = async () => {
    try {
      const resp = await fetch(BOOKS_ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log(`An error ocurred while fetching the book: ${e}`);
    }
  };

  update = async (book) => {
    try {
      let updatedWithoutId = {
        title: book.title,
        author: book.author,
        year: book.year,
        genres: book.genres,
      };
      const resp = await fetch(`${BOOKS_ENDPOINT}/${book._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedWithoutId),
      });
      return resp;
    } catch (e) {
      console.log(`An error ocurred while updating the book: ${e}`);
    }
  };

  delete = async (id) => {
    try {
      const resp = await fetch(`${BOOKS_ENDPOINT}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return resp;
    } catch (e) {
      console.log(`An error ocurred while deleting the book:${e}`);
    }
  };
}

export const bookService = new BookService(); //{ bookService }
