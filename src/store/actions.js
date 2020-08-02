import {
  ADD_OLD_CART,
  ADD_PAY_CART
} from './type.js'
export default {
  addCart (context, payload) {
    // 把详情页加入购物车的产品信息保存在state中，
    // 先遍历数组中有没有相同的产品信息，有则改变count,没则添加新产品信息
    // for (const item of context.state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }
    return new Promise((resolve, reject) => {
      const oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_OLD_CART, oldProduct)
        resolve('本商品数量+1!')
      } else {
        payload.count = 1
        context.commit(ADD_PAY_CART, payload)
        resolve('添加购物车成功！')
      }
    })
  }
}
