import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MovieList } from "./components/MovieList.jsx";

const App = () => {
  const [error, setError] = useState("");

  return (
    <main>
      <div>Your next movie!</div>
      <MovieList />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
