import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  update = id => {
    const {searchInput} = this.state
    this.setState({searchInput: id})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-bg-container">
        <div className="google-card">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="searchIcon-input-cont">
            <img
              className="search-img"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
            />

            <input
              type="search"
              onChange={this.onChangeSearchInput}
              placeholder="search Google"
              value={searchInput}
            />
          </div>
          <ul className="lists-container">
            {searchResults.map(eachlist => (
              <SuggestionItem
                suggestionlistDetails={eachlist}
                key={eachlist.id}
                update={this.update}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
