import React from 'react'
import { cleanup, render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

afterEach(cleanup)

describe("App", () => {
  test('App Container', () => {
    const { getByTestId } = render(<App />)
    const uiContainer = getByTestId('uiContainer')
    expect(uiContainer).toHaveClass('ui container')
    expect(uiContainer).toHaveStyle('marginTop: "10px"')
  })

})
