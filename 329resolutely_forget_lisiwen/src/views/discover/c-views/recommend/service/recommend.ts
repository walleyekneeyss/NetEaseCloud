import request from '@/service/request';
export function getBanners() {
  return request({
    url: '/banner'
  });
}

export function getHotRecommend(limit = 30) {
  return request({
    url: '/personalized',
    params: {
      limit: 8
    }
  });
}
