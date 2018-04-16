import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import QuestionContent from './Question.Card'
import renderer from 'react-test-renderer'
import { wrap } from 'module';
import { 
  Container, 
  Content, 
  Button, 
  Icon, 
  Card, 
  CardItem, 
  Body, 
  Left, 
  Right, 
  IconNB } from 'native-base'


enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<QuestionContent 
    submit={this.submit}
    name={this.state.name}
    index={this.state.index}
    questions={this.props.data.data}
    score={this.state.score}/>)
})

describe('<QuestionContent/>', () => {
  it('should render <Card/>', () => {
    expect(wrapper).toBeDefined()
  })
})

// describe(`Snapshot test <QuestionContent/>`, () => {
//   it(`Capturing snapshot of QuestionContent`, () => {
//     const renderedValue = renderer.create(<Provider store={store}></Provider>)
//   })
// })

describe (`Have Elements`, () => {
  it(`should render Card`, () => {
    expect(wrapper.find("Card").length).toBe(1)
  })
  it(`should render FlatList`, () => {
    expect(wrapper.find("Picker").length).toBe(1)
    expect(wrapper.find("FlatList")).toBeDefined()  
  })
  it(`Should find Card Item`, () => {
    expect(wrapper.find(<CardItem/>)).toBeDefined()
    expect(wrapper.find("CardItem").length).toBe(3)
  })
})



describe(`Check Attributes`, () => {
  it(`Button have attributes`, () => {
    expect(wrapper.find("Button").at(0).props()).toHaveProperty("onPress")
  })
})