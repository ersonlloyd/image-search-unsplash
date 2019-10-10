import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <div className="ui icon input">
              <input
                type="text"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              />
              <button onSubmit={this.onFormSubmit} className="ui button primary" style={{display: 'flex'}}>Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
