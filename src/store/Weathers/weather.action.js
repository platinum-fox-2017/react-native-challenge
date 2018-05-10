import { LOAD_DATA } from './weather.actionType'
import axios from 'axios'

export const loadDataF = (latitude,longtitude) => {
  return dispatch => {
      axios.get('https://api.darksky.net/forecast/b842ca00e6521c68a9b02df4a39ba74e/' + latitude + ',' + longtitude)
        .then((response) => {
          dispatch(loadData(response.data.daily.data))
        })
        .catch((err) => {
          console.log(err)
          // Alert.alert(
          //   'Alert',
          //   'ERRRRR',
          //   [{text: 'OK'}],
          //   { cancelable: false }
          // )
        }
      )
    }
}

const loadData = (response) => {
  return {
    type: LOAD_DATA,
    payload: response
  }
}