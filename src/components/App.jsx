import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchText: '',
  };
  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div>
        <Searchbar handleSearch={this.handleSearch} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <ImageGallery searchText={this.state.searchText} />
      </div>
    );
  }
}
export default App;
