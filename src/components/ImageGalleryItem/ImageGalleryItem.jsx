import { Component } from "react";
import { StyledImageGalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
    render() {
        const { toggleModal, smallImageUrl, largeImageUrl } = this.props;
        return <>
            <StyledImageGalleryItem>
                <GalleryItemImage src={smallImageUrl} alt="" data-url={largeImageUrl} onClick={toggleModal} />
            </StyledImageGalleryItem>
        </>
    }
}

ImageGalleryItem.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    smallImageUrl: PropTypes.PropTypes.string.isRequired,
    largeImageUrl: PropTypes.PropTypes.string.isRequired,
}
