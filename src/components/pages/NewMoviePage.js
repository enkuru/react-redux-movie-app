import React, {Component} from 'react';
import {connect} from 'react-redux';

import NewMovieForm from './../NewMovieForm';
import {onNewMovieSubmit, fetchMovie} from "../../actions/newMovie";

class NewMoviePage extends Component {

  componentDidMount() {
    const {match} = this.props;
    if (!this.props.movie && match.params._id) {
      this.props.fetchMovie(match.params._id);
    }
  }

  render() {
    return (
      <div>
        <h2>New Movie</h2>
        <NewMovieForm movie={this.props.movie}
                      newMovie={this.props.newMovie} onNewMovieSubmit={this.props.onNewMovieSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = ({newMovie, movies}, props) => {
  return {newMovie, movie: movies.movies.find(movie => movie._id === props.match.params._id)}
};

const mapDispatchToProps = {
  onNewMovieSubmit, fetchMovie
};


export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
