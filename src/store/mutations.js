import {
  ADD_OLD_CART,
  ADD_PAY_CART
} from './type.js'
export default {
  // 把详情页加入购物车的产品信息保存在state中，
  // 先遍历数组中有没有相同的产品信息，有则改变count,没则添加新产品信息
  [ADD_OLD_CART] (state, payload) {
    payload.count++
    // console.log(payload)
    // state.cartList.splice(0, 1, count)
  },
  [ADD_PAY_CART] (state, payload) {
    payload.isCheck = true
    state.cartList.push(payload)
  }
}
