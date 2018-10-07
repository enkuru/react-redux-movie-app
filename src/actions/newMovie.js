import axios from 'axios';
import {API_BASE} from './../config/env';

export const NEW_MOVIE = 'NEW_MOVIE';
export const NEW_MOVIE_PENDING = 'NEW_MOVIE_PENDING';
export const NEW_MOVIE_FULFILLED = 'NEW_MOVIE_FULFILLED';
export const NEW_MOVIE_REJECTED = 'NEW_MOVIE_REJECTED';

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_PENDING = 'FETCH_MOVIE_PENDING';
export const FETCH_MOVIE_FULFILLED = 'FETCH_MOVIE_FULFILLED';
export const FETCH_MOVIE_REJECTED = 'FETCH_MOVIE_REJECTED';

export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const UPDATE_MOVIE_PENDING = 'UPDATE_MOVIE_PENDING';
export const UPDATE_MOVIE_FULFILLED = 'UPDATE_MOVIE_FULFILLED';
export const UPDATE_MOVIE_REJECTED = 'UPDATE_MOVIE_REJECTED';

export function onNewMovieSubmit({title, cover}) {
  return dispatch => {
    dispatch({
      type: NEW_MOVIE,
      payload: axios.post(`${API_BASE}/movies`, {title, cover}).then(res => res.data.movie)
    })
  }
}

export function onUpdateMovieSubmit({_id, title, cover}) {
  return dispatch => {
    dispatch({
      type: UPDATE_MOVIE,
      payload: axios.put(`${API_BASE}/movies/${_id}`, {title, cover}).then(res => res.data.movie)
    })
  }
}

export function fetchMovie(_id) {
  return dispatch => {
    dispatch({
      type: FETCH_MOVIE,
      payload: axios.get(`${API_BASE}/movies/${_id}`).then(res => res.data.movie)
    })
  }
}