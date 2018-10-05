import React, {Component} from 'react';
import {Button, Image, Form} from 'semantic-ui-react'

import InlineError from './InlineError';

class NewMovieForm extends Component {
  state = {
    title: '',
    cover: '',
    errors: {}
  };

  handleChange = e => this.setState({[e.target.name]: [e.target.value]});

  onSubmit = () => {
    console.log("bf on submit state->", this.state.errors);
    const errors = this.validate();

    console.log("validate result->", errors);
    this.setState({errors});
  };

  validate = () => {
    const errors = {};

    console.log(this.state);

    if (!this.state.title.length) errors.title = "Can't be blank";
    if (!this.state.cover.length) errors.cover = "Can't be blank";

    return errors;
  };

  componentDidMount() {
    console.log("componentDidMount state->", this.state.errors);
  }

  render() {
    const {errors} = this.state;
    return (
      <div>
        <h2>New Movie</h2>
        <Form onSubmit={this.onSubmit}>
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
      </div>
    );
  }
}

export default NewMovieForm;