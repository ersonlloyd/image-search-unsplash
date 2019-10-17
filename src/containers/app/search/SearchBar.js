import React from "react"

class SearchBar extends React.Component {
  state = {
    term: ""
  }


  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  onChange = (event) => {
    this.setState({ term: event.target.value })
  }



  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} data-testid="formId" className="ui form">
          <div className="field">
            <label>Image Search</label>
            <div className="ui icon input">
              <input
                name='search'
                type="text"
                value={this.state.term}
                placeholder="Search"
                data-testid="searchId"
                onChange={this.onChange}
              />
              <div>
                <button
                  type="submit"
                  data-testid="submit"
                  className="ui button primary"
                  style={{display: 'flex'}}
                  >Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
