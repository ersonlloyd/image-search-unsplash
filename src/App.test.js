import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
import SearchBar from 'app/search/SearchBar'

configure({ adapter: new Adapter() });

afterEach(cleanup)

describe("App", () => {
  test('Search Submit Function ', () => {
    const onFormSubmit = jest.fn()
    const { getByTestId } = render(<SearchBar onSubmit={onFormSubmit}/>)
    fireEvent.click(getByTestId('submit'))
    expect(onFormSubmit).toHaveBeenCalledTimes(1)

    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    jest.spyOn(instance, 'onSearchSubmit')
    instance.onSearchSubmit()
    expect(instance.onSearchSubmit).toHaveBeenCalled();
  })

  test('Check App Container', () => {
    const { getByTestId } = render( <App /> )
    const uiContainer = getByTestId('uiContainer')
    expect(uiContainer).toHaveClass('ui container')
    expect(uiContainer).toHaveStyle('marginTop: "10px"')
  })
})
