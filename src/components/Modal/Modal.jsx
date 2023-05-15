import { Component } from "react";
import { Overlay, StyledModal } from "./Modal.styled";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
            if (e.code === 'Escape') {
                this.props.onClose();
            }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    
    render() {
        const { imageToShow } = this.props;
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
            <StyledModal>
                <img src={imageToShow} alt=""/>
            </StyledModal>
        </Overlay>, modalRoot
        )
    }
}

Modal.propTypes = {
    imageToShow: PropTypes.string.isRequired,
}



