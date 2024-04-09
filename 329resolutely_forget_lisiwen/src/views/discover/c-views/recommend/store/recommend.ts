import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend';

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

interface IrecommendState {
  banners: any[];
  hotRecommends: any[];
  newAlbums: any[];
}
const initialState: IrecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
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
    }
  }
});

export const { changeBannersAction, changeHotRecommendAction, changeNewAlbumAction } = recommendSlice.actions;
export default recommendSlice.reducer;
