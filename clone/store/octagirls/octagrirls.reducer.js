import { OCTAGIRL_SUCESS } from './octagirls.actionType'

const initialState = {
  octagirls: []
}

const reducers = (state=initialState, action) => {
  switch(action.type) {
    case OCTAGIRL_SUCESS:
      return {
        ...state,
        octagirls: action.octagirls
      }
    default:
      return state
  }
}

export default reducers