import { 
  FETCH_DATA,
  RELOAD,
  SETDIFF
 } from './actionTypes'
import axios from 'axios'

export const getQuestions = (payload) => {
  return dispath => {
    const {diff, number} = payload
    return axios.get(`https://opentdb.com/api.php?amount=${number}&difficulty=${diff}&type=boolean`)
    .then(({data}) => {
      dispath(FETCHDATA(data.results))
      return data.results
    })
  }
}

const FETCHDATA = (data) => ({
  type: FETCH_DATA,
  payload: data
})

export const reloadData = () => {
  return dispath => {
    dispath(RELOADED())
  }
}

const RELOADED = () => ({
  type: RELOAD,
})

export const setdifficulty = (payload) => {
  return dispath => {
    dispath(CHANGEDIFF(payload))
  }
}

const CHANGEDIFF = (data) => ({
  type: SETDIFF,
  payload: data
})

export const spliceQuestion = (payload) => {
  return dispath => {
    const { data, index } = payload
    const questions = [ ...data ]
    questions.splice(index,1)
    dispath(FETCHDATA(questions))
  }
}