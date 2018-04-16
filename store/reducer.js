const initialize = {
  data: [],
  difficulty: 'easy',  
}

const reducer = (state = initialize, action) => {
  switch (action.type) {
    case 'FETCH_DATA': {
      return {
        ...state,
          data: action.payload
      }
    }

    case 'RELOAD': {
      return {
        ...state,
          data: []
      }
    }

    case 'SETDIFF': {
      return {
        ...state,
          difficulty: action.payload
      }
    }

    default:
      return state;
  }
}

export default reducer