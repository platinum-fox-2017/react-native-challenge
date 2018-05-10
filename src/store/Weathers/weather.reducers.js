import { LOAD_DATA }  from './weather.actionType'

const intialState = {
  weatherList: []
}

const reducer = (state=intialState, action) => {
  console.log('ini action type', action.type)
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        weatherList: action.payload
      }
    default:
      return state
  }
}

export default reducer