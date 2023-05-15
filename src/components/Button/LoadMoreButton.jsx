import { StyledButton } from "./LoadMoreButton.styled";
import { Component } from "react";
import { ButtonContainer } from "./LoadMoreButton.styled";
import PropTypes from 'prop-types';

export class LoadMoreButton extends Component {
    render() {
        return <ButtonContainer>
            <StyledButton onClick={this.props.handleLoadMore}>Load more</StyledButton>
        </ButtonContainer>
    }
}

LoadMoreButton.propTypes = {
    handleLoadMore: PropTypes.func.isRequired,
}