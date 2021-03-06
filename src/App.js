import React from "react"

import unsplash from 'lib/api/unsplash'
import SearchBar from 'app/search/SearchBar'
import ImageList from 'app/image/ImageList'

class App extends React.Component {
  state = {
    images: []
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    })

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div
        data-testid="uiContainer"
        className="ui container"
        style={{ marginTop: "10px" }}
      >
        <SearchBar
          onSubmit={this.onSearchSubmit}
        />
        <ImageList
          images={this.state.images}
        />
      </div>
    )
  }
}

export default App
