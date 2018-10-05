import axios from 'axios';
import {API_BASE} from './../config/env';

export const FETCHED_MOVIES = 'FETCHED_MOVIES';

export function fetchMovies() {
  return dispatch => {
    axios.get(`${API_BASE}/movies`).then(res => res.data.movies)
      .then(movies => dispatch({type: FETCHED_MOVIES, payload: movies}))
      .catch(err => console.log(err))
  }
}