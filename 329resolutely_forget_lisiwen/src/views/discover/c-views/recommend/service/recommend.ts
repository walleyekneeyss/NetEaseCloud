import request from '@/service/request';
export function getBanners() {
  // 获取banner信息
  return request({
    url: '/banner'
  });
}

export function getHotRecommend(limit = 100) {
  // 获取热门推荐的歌单
  return request({
    url: '/personalized',
    params: {
      limit: limit
    }
  });
}

export function getNewAlbum() {
  // 获取最新专辑
  return request({
    url: '/album/newest',
    params: {}
  });
}

export function getPlaylistDetail(id: number) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  });
}
