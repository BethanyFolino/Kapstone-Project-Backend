import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import Reviews from "../reviews/Reviews";
import ReviewForm from "../reviews/ReviewForm";
import { likeMovie } from "../../actions/like";

const Movie = ({ Title, Year, Poster, imdbID }) => {
  const [likes, setLikes] = useState(0);

  const likeTheMovie = (e) => {
    if (likes >= 0) {
      setLikes(likes + 1);
    }
  };

  return (
    <>
      {/* <div className="movie">
        <h1>{Title}</h1>
        <h2>{Year}</h2>
        <div>
          <img src={Poster} alt={Title} />
        </div>
      </div>
      <div>{likes}</div>
      <button onClick={likeTheMovie}>Like</button>
      {/* reviews - imdbID exists here */}
      {/* <ReviewForm imdbID={imdbID} />
      <Reviews imdbID={imdbID} />  */}
      <div className='movie-results'>
      <Card className="our-movies" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
          <Card.Title>Title: {Title}</Card.Title>
          <Card.Text>Year Created: {Year}</Card.Text>
          <Card.Text>Likes: {likes}</Card.Text>
          <button onClick={likeTheMovie}>Like</button>
          <Card.Text>
            <ReviewForm imdbID={imdbID} />
          </Card.Text>
          <Card.Text>
            <h2>Reviews:</h2>
            <Reviews imdbID={imdbID} />
          </Card.Text>
        </Card.Body>
      </Card>
      <ReviewForm imdbID={imdbID} />
      <Reviews imdbID={imdbID} /> 
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Poster} />
  <Card.Body>
    <Card.Title>Title: {Title}</Card.Title>
    <Card.Text>
     Year Created: {Year}
    </Card.Text>
    <Card.Text>
    <Reviews imdbID={imdbID} />
    </Card.Text>
    <Card.Text>
    <Reviews imdbID={imdbID} />
    </Card.Text>
  </Card.Body>
</Card>
</div>
    </>
  );
};

export default Movie;
