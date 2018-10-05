import React, {Component} from 'react';
import {connect} from 'react-redux';

import NewMovieForm from './../NewMovieForm';
import {newMovie} from "../../actions/newMovie";

class NewMoviePage extends Component {
  render() {
    return (
      <div>
        <NewMovieForm/>
      </div>
    );
  }
}

const mapStateToProps = ({newMovie}) => {
  return {newMovie}
};

const mapDispatchToProps = {
  newMovie
};


export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
