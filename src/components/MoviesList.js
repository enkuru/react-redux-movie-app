import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import {Grid} from 'semantic-ui-react';
import HashLoader from 'react-spinners/HashLoader';

const MoviesList = ({movies}) => {
  const emptyMessage = (
    <div>
      {
        movies.error.response
          ? <h3>Error retrieving data: {movies.error.message}</h3>
          : (!movies.fetching ? <p>There are no movies yet</p> : null)
      }
    </div>
  );

  const moviesList = (
    <div>
      <Grid stackable columns={2}>
        {movies.movies.map(movie => <MovieCard key={movie._id} movie={movie}/>)}
      </Grid>
    </div>
  );

  return (
    <div>
      <HashLoader color={'#35bdb2'} sizeUnit={"px"} size={40} loading={movies.fetching}/>

      {movies.movies.length ? moviesList : emptyMessage}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    movies: PropTypes.array.isRequired
  }).isRequired,
};

export default MoviesList;