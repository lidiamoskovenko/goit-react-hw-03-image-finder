import React, { Component } from "react";

export class Searchbar extends Component {
  state = {
    value: '',
  }

  createCurrentValue = (e) => {
    this.setState({
      value: e.currentTarget.value.toLowerCase(),
    })
  }

  onSubmitHandler = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      alert('Please, enter a search term');
      return
}
    this.props.onSubmit(this.state.value);
    this.setState({
        value: ''});
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmitHandler}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.createCurrentValue}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
