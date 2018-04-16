import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FormDiff from './Home.Form_Diff'
import renderer from 'react-test-renderer'
import { wrap } from 'module';

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<FormDiff diff={ this.state.difficulty} change={this.changeNumber}/>)
})

describe('<FormDiff/>', () => {
  it('should render <FormDiff/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe (`Have Elements`, () => {
  it(`should render Form`, () => {
    expect(wrapper.find("Form").length).toBe(1)
  })
  it(`should render Picker`, () => {
    expect(wrapper.find("Picker").length).toBe(1)
    expect(wrapper.find(<Picker/>)).toBeDefined()  
  })
  it(`should render Picker.Item`, () => {
    expect(wrapper.find("Picker.Item").length).toBe(3)
  })
})

describe(`Check Attributes`, () => {
  it(`Picker have attributes`, () => {
    expect(wrapper.find("Picker").at(0).props()).toHaveProperty("iosHeader")
    expect(wrapper.find("Picker").at(0).props()).toHaveProperty("mode")
    expect(wrapper.find("Picker").at(0).props()).toHaveProperty("selectedValue")
    expect(wrapper.find("Picker").at(0).props()).toHaveProperty("onValueChange")
  })
  it(`Picker Item have attributes`, () => {
    expect(wrapper.find("Picker.Item").at(0).props()).toHaveProperty("label")
    expect(wrapper.find("Picker.Item").at(0).props()).toHaveProperty("value")
  })
})