import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import store from '../store'

Enzyme.configure({ adapter: new Adapter() })

describe('Test action type', () => {
  it('test state', () => {
    const state = store.getState().data
    expect(state).toBeDefined()
  })
  
  it('test FETCH_DATA', () => {
    store.dispatch({
      type: 'FETCH_DATA',
      payload: [{
        question: 'Apa fungsi dari hidung?'
      },{
        question: 'Apa fungsi dari tangan'
      }]
    })
    const FETCH_DATA = store.getState().data.data
    expect(FETCH_DATA).not.toHaveLength(0)
  })

  it('test RELOAD', () => {
    store.dispatch({
      type: 'RELOAD',
    })
    const RELOAD = store.getState().data.data
    expect(RELOAD).toHaveLength(0)
    expect(RELOAD).toEqual([])
  })

  it('test SETDIFF', () => {
    store.dispatch({
      type: 'SETDIFF',
      payload: 'medium'
    })
    const SETDIFF = store.getState().data.difficulty
    expect(SETDIFF).not.toHaveLength(0)
    expect(SETDIFF).toBe('medium')
  })
})