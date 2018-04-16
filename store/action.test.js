import configureStore from 'redux-mock-store'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import thunk from 'redux-thunk'

import { getQuestions, reloadData, setdifficulty, spliceQuestion } from './action.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})

// getQuestions
describe('test action getQuestions', () => {
  it('should fetch getQuestions', async() => {
    const res = await store.dispatch(getQuestions({diff: 'medium', number: 5}))
    const actions = store.getActions()
    expect(actions[0].type).toEqual('FETCH_DATA')
    expect(actions[0].payload).not.toHaveLength(0)
  })
})

// reloadData
describe('test action reloadData', () => {
  it('should fetch reloadData', async() => {
    const res = await store.dispatch(reloadData())
    const actions = store.getActions()
    expect(actions[1].type).toEqual('RELOAD')
  })
})

// setdifficulty
describe('test action setdifficulty', () => {
  it('should fetch setdifficulty', async() => {
    const res = await store.dispatch(setdifficulty('medium'))
    const actions = store.getActions()
    expect(actions[2].type).toEqual('SETDIFF')
    expect(actions[2].payload).not.toHaveLength(0)
    expect(actions[2].payload).not.toBeUndefined()
  })
})

// spliceQuestion
describe('test action spliceQuestion', () => {
  it('should fetch spliceQuestion', async() => {
    const res = await store.dispatch(spliceQuestion(
      {data: [{question: 'haahaha'},{question: 'hohoho'},{question: 'hihihi'}],index:0}
    ))
    const actions = store.getActions()
    expect(actions[3].type).toEqual('FETCH_DATA')
  })
})