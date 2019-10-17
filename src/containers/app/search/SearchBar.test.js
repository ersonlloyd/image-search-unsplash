import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SearchBar from 'app/search/SearchBar'
import axiosMock from 'axios'

afterEach(cleanup)

const setup = () => {
  const utils = render(<SearchBar />)
  const input = utils.getByTestId('searchId')
  return {
    input,
    ...utils,
  }
}

describe("SearchBar", () => {
  test('Check Strings in SearchBar', () => {
    const { getAllByText } = render(<SearchBar />)

    const searchCount = getAllByText(/Search/)
    const imageCount =  getAllByText(/Image/)

    expect(imageCount).toHaveLength(1)
    expect(searchCount).toHaveLength(2)
  })

  test('Capture Search Input', () => {
    const { input } = setup()
    fireEvent.change(input, {
      target: {
        value: "twitter"
      }
    })
    expect(input.value).toBe('twitter')
  })

  test('Capture Search Button', () => {
    const onFormSubmit = jest.fn()
    const { getByTestId } = render(<SearchBar onSubmit={onFormSubmit}/>)
    fireEvent.click(getByTestId('submit'))
    expect(onFormSubmit).toHaveBeenCalledTimes(1)
  })
})
