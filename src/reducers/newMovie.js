import * as newMovieActions from './../actions/newMovie';

const initialState = {
  newMovie: {},
  done: false,
  fetching: false,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case newMovieActions.NEW_MOVIE_PENDING:
      return {...state, fetching: true};
    case newMovieActions.NEW_MOVIE_FULFILLED:
      return {...state, fetching: false, done: true, newMovie: action.payload};
    case newMovieActions.NEW_MOVIE_REJECTED:
      return {...state, fetching: false, error: action.payload};
    default:
      return state;
  }
}