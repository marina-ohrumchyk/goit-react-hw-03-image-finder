import { Component } from 'react';
import { Container } from './App.styled';
import { Modal } from './Modal/Modal';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './Button/LoadMoreButton';
import { Loader } from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { getApi }  from 'services/getApi';
import "react-toastify/dist/ReactToastify.css";

export class App extends Component {
  state = {
    searchText: '',
    showModal: false,
    isLoading: false,
    images: [],
    imageToShow: '',
    page: 1,
    error: null,
  }

  componentDidUpdate(prevProps, prevState) {
		if (prevState.page !== this.state.page || prevState.searchText !== this.state.searchText) {
			getApi(this.state.searchText, this.state.page)
      .then((response) => response.json())
        .then((data) => {
            const newImages = data.hits.map((image) => ({ id: image.id, smallImageUrl: image.webformatURL, largeImageUrl: image.largeImageURL }));
            this.setState({
              images: this.state.images.concat(newImages),
            })
				})
				.catch((error) => {
					this.setState({ error })
				})
			    .finally(() => {
				    this.setState({ isLoading: false })
			})
		}
	}

  toggleModal = (event) => {
    if (event && event.currentTarget) {
      const bigImageUrl = event.currentTarget.dataset.url;
      this.setState(({ imageToShow: bigImageUrl }))
    } 
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  handleSearchbarSubmit = searchText => {
    if (this.state.searchText !== searchText) {
      this.setState({
        searchText: searchText,
        isLoading: true,
        images: [],
        page: 1,
      });
    }
  }

  handleLoadMore = e => {
    this.setState({
      page: this.state.page + 1,
    })
  }

  render() {
     return (
       <Container>
         {this.state.showModal && <Modal imageToShow={ this.state.imageToShow } onClose={this.toggleModal}>
         </Modal>}
         <Searchbar handleSearchbarSubmit={this.handleSearchbarSubmit} />
         <ToastContainer autoClose={3000}/>
         {this.state.isLoading && <Loader/>}
         {this.state.images && (
           <ImageGallery toggleModal={this.toggleModal} images={this.state.images} />
         )}
         {this.state.images.length !== 0 && (
          <LoadMoreButton handleLoadMore={this.handleLoadMore}/>
         )}
    </Container>
  );
  }
};
