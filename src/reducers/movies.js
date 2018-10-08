import * as moviesActions from './../actions/movies';

const initialState = {
  movies: [],
  fetching: false,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    //FETCH MOVIES
    case moviesActions.FETCH_MOVIES_PENDING:
      return {...state, fetching: true};
    case moviesActions.FETCH_MOVIES_FULFILLED:
      return {...state, fetching: false, movies: action.payload};
    case moviesActions.FETCH_MOVIES_REJECTED:
      return {...state, fetching: false, error: action.payload};

    //DELETE MOVIE
    case moviesActions.DELETE_MOVIE_PENDING:
      return {...state, fetching: true};
    case moviesActions.DELETE_MOVIE_FULFILLED:
      return {...state, fetching: false, movies: state.movies.filter(movie => movie._id !== action.payload._id)};
    case moviesActions.DELETE_MOVIE_REJECTED:
      return {...state, fetching: false, error: action.payload};

    default:
      return state;
  }
}