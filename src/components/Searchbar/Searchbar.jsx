import React, { Component } from 'react';
import { toast } from 'react-toastify';
import css from "components/Searchbar/Searchbar.module.css"
import 'react-toastify/dist/ReactToastify.css';
import { IoIosSearch } from 'react-icons/io';

class Searchbar extends Component {
  state = {
    value: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault()
    // this.props.handleSearch(this.state.value);
    if (this.state.value.trim() === '') {
      toast.error('bad!');
      return
      
    }
    this.props.handleSearch(this.state.value)
    this.setState({value: ''})
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
          <IoIosSearch />
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
