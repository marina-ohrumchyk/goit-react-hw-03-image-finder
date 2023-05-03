import React, { Component } from 'react';
import css from 'components/ImageGallery/ImageGallery.module.css';
import getApi from 'services/getApi';
import Scroll from 'react-scroll';
import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import IsLoading from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    myData: [],
    isLoading: false,
    page: 1,
    open: false,
    currentImageIndex: 0,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchText !== this.props.searchText ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      getApi(this.props.searchText, this.state.page)
        .then(response => response.json())
        .then(data =>
          this.setState(prevState => ({
            myData: [...prevState.myData, ...data.hits],
          }))
        )
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  loadMoreImages = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        this.scrollWindow();
      }
    );
  };

  scrollWindow = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToBottom({ smooth: true, delay: 1000 });
  };

  clickImage = index => {
    this.setState({
      open: true,
      currentImageIndex: index,
    });
  };

  closeLightbox = () => {
    this.setState({ open: false });
  };

  render() {
    const { myData, isLoading } = this.state;
    return (
      <div className={css.Gallary_container}>
        {isLoading && <IsLoading />}
        {myData.length > 0 && (
          <ul>
            <ImageGalleryItem
              myData={this.state.myData}
              currentImageIndex={this.state.currentImageIndex}
              open={this.state.open}
              clickImage={this.clickImage}
              closeLightbox={this.closeLightbox}
            />

            <Button loadMoreImages={this.loadMoreImages} />
          </ul>
        )}
      </div>
    );
  }
}

export default ImageGallery;
