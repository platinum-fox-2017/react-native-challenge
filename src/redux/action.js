import {
  GET_CARD_OK, GET_CARD_LOAD, GET_CARD_ERR,
  GET_XKCD_OK, GET_XKCD_LOAD, GET_XKCD_ERR,
  XKCD_AMOUNT
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
export function actComicAmount (payload) {
  return {type: XKCD_AMOUNT, payload: payload}
}

// THUNK MIDDLEWARE
export function getCards (q) {
  return (dispatch) => {
    let url
    if (q) {
      url = `https://api.pokemontcg.io/v1/cards?`
      if (q.name !== '') {
        url += `name=${q.name}&`
      }
      if (q.types !== '') {
        url += `types=${q.types}&`
      }
      if (q.series !== '') {
        url += `series=${q.series}&`
      }
      if (q.set !== '') {
        url += `set=${q.set}&`
      }
      url += `page=1`
    } else {
      url = 'https://api.pokemontcg.io/v1/cards?types=fire&page=1'
    }
    dispatch(actCards([]))
    dispatch(actCardsLoad())

    axios.get(url).then(response => {
      dispatch(actCards(response.data.cards))
    }).catch(err => {
      dispatch(actCardsErr(err))
    })

  }
}

export function getComic (code) {
  return (dispatch, getState) => {
    if (code === 'home') {
      let url = 'http://xkcd.com/info.0.json'
      dispatch(actComic({}))
      dispatch(actComicLoad())
      axios.get(url).then(response => {
        dispatch(actComicAmount(response.data.num))
        dispatch(actComic(response.data))
      }).catch(err => {
        dispatch(actComicErr(err))
      })
    } else if (code === 'prev') {
      let comic = getState().comic.num - 1
      let url = `http://xkcd.com/${comic}/info.0.json`
      dispatch(actComic({}))
      dispatch(actComicLoad())
      axios.get(url).then(response => {
        dispatch(actComic(response.data))
      }).catch(err => {
        dispatch(actComicErr(err))
      })
    } else if (code === 'next') {
      let comic = getState().comic.num + 1
      let url = `http://xkcd.com/${comic}/info.0.json`
      dispatch(actComic({}))
      dispatch(actComicLoad())
      axios.get(url).then(response => {
        dispatch(actComic(response.data))
      }).catch(err => {
        dispatch(actComicErr(err))
      })
    }


  }
}
