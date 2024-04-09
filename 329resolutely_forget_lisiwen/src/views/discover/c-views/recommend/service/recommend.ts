import request from '@/service/request';
export function getBanners() {
  return request({
    url: '/banner'
  });
}

export function getHotRecommend(limit = 100) {
  return request({
    url: '/personalized',
    params: {
      limit: limit
    }
  });
}

export function getNewAlbum() {
  return request({
    url: '/album/newest',
    params: {}
  });
}
