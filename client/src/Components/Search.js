import React from "react";

const Search = () => {
  return (
    <div className="search">
      <h1>Search for a movie or a video game!</h1>
      <h2>
        We have many popular titles across the board from call of duty to
        pokemon!
      </h2>
      <input type="text" placeholder="ex: Lion King" />
      <button>Search</button>
      <input type="text" placeholder="ex: Movie" />
      <button>Search</button>
    </div>
  );
};

export default Search;
