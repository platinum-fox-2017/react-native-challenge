import { FIGHTERS_SUCCESS, FIGHTERS_QUERY } from './fighter.actionType'
import axios from 'axios'

export const getFighters = (payload) => {
  return dispatch => {
    axios.get('http://ufc-data-api.ufc.com/api/v3/iphone/fighters')
      .then(resp => {
        let fighters = resp.data.filter(fighter => fighter.wins > 16)      
        dispatch(getFightersSuccess(fighters))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const searchFighters = (payload) => {
  return dispatch => {
   dispatch(fighterQuerySuccess(payload)) 
  }
}

const getFightersSuccess = (payload) => ({
  type: FIGHTERS_SUCCESS,
  fighters: payload
})

const fighterQuerySuccess = (payload) => ({
  type: FIGHTERS_QUERY,
  query: payload
})