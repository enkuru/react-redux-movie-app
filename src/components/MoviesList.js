import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({movies}) => {
  const emptyMessage = (
    <p>There are no movies yet</p>
  );

  const moviesList = (
    <div>Movies List</div>
  );

  return (
    <div>
      {movies.length ? moviesList : emptyMessage}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    movies: PropTypes.array.isRequired
  }).isRequired,
};

export default MoviesList;