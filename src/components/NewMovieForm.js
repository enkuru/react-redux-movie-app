import React, {Component} from 'react';
import {Button, Image, Form, Message} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import InlineError from './InlineError';

class NewMovieForm extends Component {
  state = {
    title: this.props.movie ? this.props.movie.title : '',
    cover: this.props.movie ? this.props.movie.cover : '',
    errors: {}
  };

  static propTypes = {
    onNewMovieSubmit: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const {movie} = nextProps.newMovie;

    if (movie.title && movie.title !== this.state.title) {
      this.setState({title: movie.title, cover: movie.cover});
    }
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  onSubmit = () => {
    const errors = this.validate();

    this.setState({errors});

    if (!Object.keys(errors).length) {
      this.props.onNewMovieSubmit(this.state);
    }
  };

  validate = () => {
    const errors = {};

    if (!this.state.title.length) errors.title = "Can't be blank";
    if (!this.state.cover.length) errors.cover = "Can't be blank";

    return errors;
  };

  render() {
    const {errors} = this.state;

    const errorMessage =
      this.props.newMovie.error.response &&
      <Message negative>
        <Message.Header>We're sorry</Message.Header>
        <p>A problem occurred while recording.</p>
      </Message>;

    const form = (
      <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
        <Form.Field error={!!errors.title}>
          <label>Title</label>
          {errors.title && <InlineError message={errors.title}/>}
          <input id='title' name='title' value={this.state.title}
                 onChange={this.handleChange} placeholder='Movie Title'/>
        </Form.Field>
        <Form.Field error={!!errors.cover}>
          <label>Cover Url</label>
          {errors.cover && <InlineError message={errors.cover}/>}
          <input id='cover' name='cover' value={this.state.cover}
                 onChange={this.handleChange} placeholder='Movie Cover Url'/>
        </Form.Field>
        <Image src={this.state.cover} size='small'/>
        <div style={{clear: 'both', marginBottom: '10px'}}>&nbsp;</div>
        <Button positive type='submit'>Submit</Button>
      </Form>
    );

    return (
      <div>
        {errorMessage}
        {this.props.newMovie.done ? <Redirect to='/movies'/> : form}
      </div>
    );
  }
}

export default NewMovieForm;
