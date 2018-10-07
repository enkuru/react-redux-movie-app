import * as newMovieActions from './../actions/newMovie';

const initialState = {
  newMovie: {},
  movie: {},
  done: false,
  fetching: false,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    //NEW MOVIE
    case newMovieActions.NEW_MOVIE_PENDING:
      return {...state, fetching: true};
    case newMovieActions.NEW_MOVIE_FULFILLED:
      return {...state, fetching: false, done: true, newMovie: action.payload};
    case newMovieActions.NEW_MOVIE_REJECTED:
      return {...state, fetching: false, error: action.payload};

      //FETCH MOVIE
    case newMovieActions.FETCH_MOVIE_PENDING:
      return {...state, fetching: true};
    case newMovieActions.FETCH_MOVIE_FULFILLED:
      return {...state, fetching: false, movie: action.payload};
    case newMovieActions.FETCH_MOVIE_REJECTED:
      return {...state, fetching: false, error: action.payload};

    default:
      return state;
  }
}