import React from 'react'
import { cleanup, render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SearchBar from 'app/search/SearchBar'

afterEach(cleanup)

describe("SearchBar", () => {

  test('Check Strings in SearchBar',  () => {
    const { getAllByText } = render(<SearchBar />)

    const searchCount = getAllByText(/Search/)
    const imageCount =  getAllByText(/Image/)

    expect(imageCount).toHaveLength(1)
    expect(searchCount).toHaveLength(2)
  })

  test('Capture Search Button', () => {
    const { getByTestId } = render(<SearchBar />)
    fireEvent.click(getByTestId('buttonId'))
  })

  test('Capture Search Input', () => {
    const { getByTestId } = render(<SearchBar />)
    fireEvent.change(getByTestId('searchId'), {
      target: {
        value: "twitter"
      }
    })
  })
})
