import * as newMovieActions from './../actions/newMovie';

const initialState = {
  newMovie: {},
  fetching: false,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case newMovieActions.NEW_MOVIE_PENDING:
      return {...state, fetching: true};
    case newMovieActions.NEW_MOVIE_FULFILLED:
      return {...state, fetching: false, newMovie: action.payload};
    case newMovieActions.NEW_MOVIE_REJECTED:
      return {...state, fetching: false, error: action.payload};
    default:
      return state;
  }
}