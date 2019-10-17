import React from 'react'
import { cleanup, render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'

import App from './App'

afterEach(cleanup)

describe("App", () => {
  test('App Container', () => {
    const { getByTestId } = render(<App />)
    const uiContainer = getByTestId('uiContainer')
    expect(uiContainer).toHaveClass('ui container')
    expect(uiContainer).toHaveStyle('marginTop: "10px"')
  })


  test('search photo Api', async() => {
    const onSearchSubmit = jest.fn()
    const {getByText, getByTestId } = render(<App onSearchSubmit={onSearchSubmit} />)
    const url = 'https://api.unsplash.com/search/photos'

    console.log(onSearchSubmit)
  })


})
