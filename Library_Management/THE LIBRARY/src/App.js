import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Pages/Header";
import BookList from "./components/BookList";
import Loading from "./components/Loading";
import Login from "./Pages/Login";

const URL = "http://openlibrary.org/search.json?title=";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [log, setLog] = useState(true);

  const fetchBooks = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${URL}${search}`);

      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setBooks(newBooks);
      } else {
        setBooks([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [search]);

  return (
    <div>
      {log ? (
        <Login setLogin={setLog}></Login>
      ) : (
        <div>
          <Header search={search} setSearch={setSearch}></Header>
          {loading && <div className="backdrop2"></div>}
          {loading && <Loading></Loading>}
          <div className="App">
            {!loading && <BookList bookset={books}></BookList>}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
