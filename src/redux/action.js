import {
  GET_CARD_OK, GET_CARD_LOAD, GET_CARD_ERR,
  GET_XKCD_OK, GET_XKCD_LOAD, GET_XKCD_ERR
} from './actionTypes.js'
import axios from 'axios'


// ACTIONS
export function actCards (card) {
  return {type: GET_CARD_OK, payload: card}
}
export function actCardsLoad () {
  return {type: GET_CARD_LOAD}
}
export function actCardsErr (err) {
  return {type: GET_CARD_ERR, payload: err}
}

export function actComic (comic) {
  return {type: GET_XKCD_OK, payload: comic}
}
export function actComicLoad () {
  return {type: GET_XKCD_LOAD}
}
export function actComicErr (err) {
  return {type: GET_XKCD_ERR, payload: err}
}

// THUNK MIDDLEWARE
export function getCards (source) {
  return (dispatch) => {
    dispatch(actCards([]))
    dispatch(actCardsLoad())

    const url = 'https://api.pokemontcg.io/v1/cards?types=fire&page=1'
    axios.get(url).then(response => {
      dispatch(actCards(response.data.cards))
    }).catch(err => {
      dispatch(actCardsErr(err))
    })

  }
}

export function getComic () {
  return (dispatch) => {
    dispatch(actComic({
      articles: [],
      pages: 0
    }))
    dispatch(actComicLoad())
    const url = 'http://xkcd.com/info.0.json'
    axios.get(url).then(response => {
      dispatch(actComic(response.data))
    }).catch(err => {
      dispatch(actComicErr(err))
    })

  }
}
