import {
  GET_CARD_OK, GET_CARD_LOAD, GET_CARD_ERR,
  GET_COMIC_OK, GET_COMIC_LOAD, GET_COMIC_ERR
} from './actionTypes.js'
// REDUCERS
export default function reducer (state={
  isLoading: false,
  err: '',
  cards: [],
  comic: {},
  test: 'hello'
}, action) {
  switch (action.type) {
    case GET_CARD_OK: {
      return {
        ...state,
        cards: action.payload,
        isLoading: false
      }
    }
    case GET_CARD_LOAD: {
      return {
        ...state,
        isLoading: true
      }
    }
    case GET_CARD_ERR: {
      return {
        ...state,
        isLoading: false,
        err: action.payload.message
      }
    }
    case GET_COMIC_OK: {
      return {
        ...state,
        comic: action.payload,
        isLoading: false
      }
    }
    case GET_COMIC_LOAD: {
      return {
        ...state,
        isLoading: true
      }
    }
    case GET_COMIC_ERR: {
      return {
        ...state,
        isLoading: false,
        err: action.payload.message
      }
    }
    default: {
      return state
    }

  }
}
