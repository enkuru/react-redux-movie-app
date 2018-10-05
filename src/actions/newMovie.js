import axios from 'axios';
import {API_BASE} from './../config/env';

export const NEW_MOVIE = 'FETCH_MOVIES';
export const NEW_MOVIE_PENDING = 'FETCH_MOVIES_PENDING';
export const NEW_MOVIE_FULFILLED = 'FETCH_MOVIES_FULFILLED';
export const NEW_MOVIE_REJECTED = 'FETCH_MOVIES_REJECTED';

export function newMovie() {
  return dispatch => {
    dispatch({
      type: NEW_MOVIE,
      payload: axios.get(`${API_BASE}/movies`).then(res => res.data.movies)
    })
  }
}