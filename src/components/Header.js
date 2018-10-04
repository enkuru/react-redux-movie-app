import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import * as styleHelper from "../helpers/styleHelper";
import {Container, Image, Menu, Visibility} from 'semantic-ui-react'

class Header extends Component {
  state = {
    menuFixed: null,
    overlayFixed: false,
  };

  stickTopMenu = () => this.setState({menuFixed: true});

  unStickTopMenu = () => this.setState({menuFixed: null});

  render() {
    return (
      <Visibility onBottomPassed={this.stickTopMenu} onBottomVisible={this.unStickTopMenu} once={false}>
        <Menu borderless fixed={this.state.menuFixed && 'top'}
              style={this.state.menuFixed ? styleHelper.fixedMenuStyle : styleHelper.menuStyle}>
          <Container text>
            <Menu.Item><Image size='mini' src='https://react.semantic-ui.com/logo.png'/></Menu.Item>
            <Menu.Item as={Link} to='/'>Movie App</Menu.Item>
            <Menu.Item as={Link} to='/movies'>Movies</Menu.Item>
            <Menu.Item as='a'>Add New</Menu.Item>
          </Container>
        </Menu>
      </Visibility>
    );
  }
}

export default Header;
