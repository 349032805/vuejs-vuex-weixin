import {
  getHead,
  getShopGoods
} from '@/config/api.js'
export default {
  async GET_HEADER_INFO({ commit, state }, id) {
    let res = await getHead(id)
    commit('SAVE_SHOP_HEADER', res)
  },
  async GET_SHOP_GOODS({ commit, state }, id) {
    let res = await getShopGoods(id)
    commit('SAVE_SHOP_GOODS', res)
    return res
  }
}
