import './index.css'

const SuggestionItem = props => {
  const {suggestionlistDetails, update} = props
  const {suggestion, id} = suggestionlistDetails

  const updateSearchInput = () => {
    update(id)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <img
        className="arrow-img"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        onClick={updateSearchInput}
      />
    </li>
  )
}

export default SuggestionItem
