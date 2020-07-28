import { request } from './request.js'

export function getHomeList () {
  return request({
    url: '/home/multidata'
  })
}

export function getDataList (type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
