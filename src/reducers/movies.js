import * as moviesActions from './../actions/movies';

const initialState = {
  movies: [],
  fetching: false,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case moviesActions.FETCH_MOVIES_PENDING:
      return {...state, fetching: true};
    case moviesActions.FETCH_MOVIES_FULFILLED:
      return {...state, fetching: false, movies: action.payload};
    case moviesActions.FETCH_MOVIES_REJECTED:
      return {...state, fetching: false, error: action.payload};
    default:
      return state;
  }
}