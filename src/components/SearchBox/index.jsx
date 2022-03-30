import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="search-form">
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          type="text"
          className="search-input"
          placeholder="Search something..."
        />
        <button type="submit" className="search-btn">
          SEARCH!
        </button>
      </form>
    );
  }
}
