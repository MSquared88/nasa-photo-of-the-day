import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

export default class MenuExampleBasic extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item header>NASA APOD</Menu.Item>
        <Menu.Item
          name="editorials"
          active={activeItem === "editorials"}
          onClick={this.handleItemClick}
        >
          Image Of the day
        </Menu.Item>

        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          onClick={this.handleItemClick}
        >
          Other Images
        </Menu.Item>
      </Menu>
    );
  }
}