import { Component } from "react";
import { SearchbarStyled, SearchForm, SubmitButton, SubmitButtonLabel, SearchFormInput } from './Searchbar.styled';
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
    
export class Searchbar extends Component {
    state = {
        searchText: ""
    }

    handleSearchTextChange = event => {
        this.setState({searchText: event.currentTarget.value.toLowerCase()})
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.searchText.trim() === '') {
            toast.warning("Please, type something to search for images or photos");
            return;
        }
        this.props.handleSearchbarSubmit(this.state.searchText);
    }
        
    render() {
        return (
            <SearchbarStyled>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SubmitButton type="submit">
                        <BsSearch/>
                        <SubmitButtonLabel>
                        </SubmitButtonLabel>
                    </SubmitButton>

                     <SearchFormInput
                        type="text"
                        name="imageName"
                        value={this.state.searchText}
                        onChange={this.handleSearchTextChange}
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </SearchbarStyled>  
        )
    }
}

Searchbar.propTypes = {
    handleSearchbarSubmit: PropTypes.func.isRequired,
}
