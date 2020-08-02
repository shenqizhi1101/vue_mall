import { request } from './request'

export function getDetailList (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getDateCommend () {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(columns, itemInfo, services) {
    this.discountBgColor = itemInfo.discountBgColor
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.desc = itemInfo.desc
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.cGoods = shopInfo.cGoods
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score
    this.shopUrl = shopInfo.shopUrl
  }
}

export class Params {
  constructor(info, rule) {
    this.set = info.set
    this.tables = rule.tables
  }
}
