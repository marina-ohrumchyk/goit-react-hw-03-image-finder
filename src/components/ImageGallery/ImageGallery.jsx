import { Component } from "react";
import { StyledImageGallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';


export class ImageGallery extends Component {
    render() {
        const { toggleModal, images } = this.props;
        return (
            <StyledImageGallery>
                {images.map((image) => {
                    return <ImageGalleryItem key={image.id} smallImageUrl={image.smallImageUrl} largeImageUrl={ image.largeImageUrl } toggleModal = {toggleModal} ></ImageGalleryItem>
                })}
            </StyledImageGallery>
        )
    }
}

ImageGallery.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            smallImageUrl: PropTypes.string.isRequired,
            largeImageUrl: PropTypes.string.isRequired,
    })
  ),

}