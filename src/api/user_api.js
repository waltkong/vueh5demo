import request from '@/util/request'
import qs from 'qs';

// 登录
export function doLogin(data) {
    return request({
      url: '/api/login',
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      data:qs.stringify(data),
    })
}