import { React, useEffect } from "react";
import Book from "./Book";

const URL = "http://openlibrary.org/search.json?title=";

const BookList = (props) => {
  const books = props.bookset.map((e) => {
    return <Book book={e}></Book>;
  });

  return (
    <div className="grid" style={{ width: "100%", height: "100%" }}>
      {books.length > 0 && books}
      {books.length == 0 && (
        <div style={{ width: "100%", height: "100vh" }}>
          <p
            style={{
              textAlign: "center",
              color: "Black",
              width: "100%",
              height: "100%",
              fontSize:"30px",
              justifyContent: "center",
              alignItems: "center",
              paddingTop:"20%"
            }}
          >
            SEARCH A BOOK
          </p>
        </div>
      )}
    </div>
  );
};

export default BookList;
