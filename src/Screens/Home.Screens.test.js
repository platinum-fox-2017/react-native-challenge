import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home.Screens'
import renderer from 'react-test-renderer'
import store from '../../store/index'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { getQuestions } from '../../store/action'


const mockStore = configureStore()
let initialState = {
  name: '',
  warning: false,
  difficulty: "easy",
  number: 5
}
enzyme.configure({ adapter: new Adapter()})

let mstore
let wrapper

beforeEach(() => {
  mstore = mockStore(initialState)
  wrapper = shallow(<Provider store={store}><Home/></Provider>)
})

describe('Snapshot test <Home/>',()=>{
  it('capturing Snapshot of Home', () => {
      const renderedValue =  renderer.create(<Provider store={store}><Home/></Provider>).toJSON()
      expect(renderedValue).toMatchSnapshot();
  })
})

describe (`Have Elements`, () => {
  it(`should render Container`, () => {
    expect(wrapper.find("Container").length).toBe(1)
  })
  it(`should render Content`, () => {
    expect(wrapper.find("Content").length).toBe(1)
  })
  it(`should render Content`, () => {
    expect(wrapper.find("Content").length).toBe(1)
  })
  it(`Should have Item`, () => {
    expect(wrapper.find("Item").length).toBe(3)
  })
})

describe (`Test Function`, () => { 
  initialState.difficulty = 'medium'
  it(`should difficulty change`, () => {
    expect(initialState.difficulty).toEqual('medium')
  })
})