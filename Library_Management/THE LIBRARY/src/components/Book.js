import { React } from "react";
import "./Books.css";

const Book = (props) => {
  return (
    <div className="book-item">
      <div className="backdrop"></div>
      <div className="book-item-img">
        <img
          src={
            "https://covers.openlibrary.org/b/id/" +
            props.book.cover_id +
            "-L.jpg"
          }
          alt="cover"
        />
      </div>
      <div className="book-item-info">
        <div className="title">
          {props.book.title.substring(0, 25)}
          {props.book.title.length >= 25 && "..."}
        </div>

        <div className="author">
          <div className="text-capitalize fw-7">Author: </div>
          <div>{props.book.author}</div>
        </div>
      </div>
      <div className="bottom">
        <div className="edition-count">
          <div className="text-capitalize fw-7">Total Editions: </div>
          <div>{props.book.edition_count}</div>
        </div>

        <div className="publish-year">
          <div className="text-capitalize fw-7">First Publish Year: </div>
          <div>{props.book.first_publish_year} </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
