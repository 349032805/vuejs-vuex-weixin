import {
  SAVE_LOCATION,
  SAVE_CITY_CODE,
  SAVE_ADDRESS
} from './mutation-types.js'

export default {
  //存径尾度
  [SAVE_LOCATION](state, location) {
    state.LOCATION = location
  },
  //存城市码
  [SAVE_CITY_CODE](state,citycode){
    state.CITY_CODE = citycode
  },
  //存当前地址
  [SAVE_ADDRESS](state,address){
    state.ADDRESS = address
  }
}
