import request from '@/service/request';
export function getBanners() {
  return request({
    url: '/banner'
  });
}
