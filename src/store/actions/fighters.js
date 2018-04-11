import axios from 'axios';
import { 
  GET_FIGHTERS_SUCCESS,
  GET_FIGHTERS_LOADING,
  GET_FIGHTERS_ERROR,
  REFRESH_FIGHTER_LIST_LOADING,
  REFRESH_FIGHTER_LIST_SUCCESS
} from '../actiontypes/actionTypes';

const GetFightersLoading = () => ({
  type: GET_FIGHTERS_LOADING,
});

const GetFightersError = (payload) => ({
  type: GET_FIGHTERS_ERROR,
  payload
});

const GetFightersSuccess = (payload) => ({
  type: GET_FIGHTERS_SUCCESS,
  payload,
});

const GetRefreshFightersLoading = () => ({
  type: REFRESH_FIGHTER_LIST_LOADING,
});

const GetRefreshFightersError = (payload) => ({
  type: GET_FIGHTERS_ERROR,
  payload
});

const GetRefreshFightersSuccess = (payload) => ({
  type: REFRESH_FIGHTER_LIST_SUCCESS,
  payload,
});

export function getFighterList() {
  return dispatch => {
    dispatch(GetFightersLoading())
    axios.get('http://ufc-data-api.ufc.com/api/v1/us/fighters')
    .then(payload => {
      // console.log('actions getFighterList', payload.data)
      dispatch(GetFightersSuccess(payload.data))
    })
    .catch(err => {
      dispatch(GetFightersError(err))
    })
  }
};

export function refreshFighterList() {
  return dispatch => {
    dispatch(GetRefreshFightersLoading())
    axios.get('http://ufc-data-api.ufc.com/api/v1/us/fighters')
    .then(payload => {
      dispatch(GetRefreshFightersSuccess(payload.data))
    })
    .catch(err => {
      dispatch(GetRefreshFightersError(err))
    })
  }
};