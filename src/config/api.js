import http from './axios.js'

//示例
function getHead(id) {

  return http(`/shopping/restaurant/${id}?latitude=31.22967&longitude=121.476196&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics`)

}

function getShopGoods(id) {
  return http('/shopping/v2/menu', { restaurant_id: id })
}

export { getHead, getShopGoods }
