import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners, getHotRecommend, getNewAlbum, getPlaylistDetail } from '../service/recommend';

export const featchBannersDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res: any = await getBanners();
  dispatch(changeBannersAction(res.banners));
  console.log('getBanners-res', res);
  return res.banners;
});

export const featchHotRecommendAction = createAsyncThunk('hotRecommend', async (arg, { dispatch }) => {
  const res: any = await getHotRecommend();
  dispatch(changeHotRecommendAction(res.result));
  console.log('getHotRecommend-res', res);
});
export const featchNewAlbumAction = createAsyncThunk('newAlbum', async (arg, { dispatch }) => {
  const res: any = await getNewAlbum();
  dispatch(changeNewAlbumAction(res.albums));
  console.log('getNewAlbum-res', res);
});
const rinkingIds = [19723756, 3779629, 2884035];
export const featchRankingAction = createAsyncThunk('rankingData', async (_arg, { dispatch }) => {
  // for (const id of rinkingIds) {
  //   getPlaylistDetail(id).then(res => {
  //     switch (id) {
  //       case 19723756:
  //         console.log('飙升榜数据', res);
  //         dispatch(changeRankingAction(res));
  //         break;
  //       case 3779629:
  //         console.log('新歌榜数据', res);
  //         dispatch(changeRankingAction(res));
  //         break;
  //       case 2884035:
  //         console.log('原创榜数据', res);
  //         dispatch(changeRankingAction(res));
  //         break;
  //     }
  //   });
  // }
  // dispatch(changeNewAlbumAction(res.albums));
  // console.log('getPlaylistDetail-res', res);

  //

  //

  const promises: Promise<any>[] = [];

  // 保证数据的顺序性,前端最后就是你怎么处理数据 数据结构和算法
  // 保证网络传输服务器数据的顺序性  用Promise.all
  // let index =0 let results =[]
  for (const id of rinkingIds) {
    promises.push(getPlaylistDetail(id));
    // results.push(res) inedx++   if(index ==3){  dispatch(changeRankingAction(res));}
    // 哪怕id有顺序  先发出去不一定先拿到结果网络传输服务器
  }
  Promise.all(promises).then(res => {
    // 全resolve之后进入 内部有顺序
    // 请求一起发出去，等到都有结果再来更新回调的
    console.log('res', res);
    const playlists = res.map(item => item.playlist);
    console.log('playlists', playlists);
    dispatch(changeRankingAction(playlists));
  });
});

interface IrecommendState {
  banners: any[];
  hotRecommends: any[];
  newAlbums: any[];
  rankingData: any[];
}
const initialState: IrecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankingData: []
};
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload;
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload;
    },
    changeRankingAction(state, { payload }) {
      state.rankingData = payload;
    }
  }
});

export const { changeBannersAction, changeHotRecommendAction, changeNewAlbumAction, changeRankingAction } =
  recommendSlice.actions;
export default recommendSlice.reducer;
