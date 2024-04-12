import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners, getHotRecommend } from '../service/recommend';

export const featchBannersDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res: any = await getBanners();
  dispatch(changeBannersAction(res.banners));
  console.log(res);
  return res.banners;
});

export const featchHotRecommendAction = createAsyncThunk('hotRecommend', async (arg, { dispatch }) => {
  const res: any = await getHotRecommend(8);
  dispatch(changeHotRecommendAction(res.result));
  console.log(res);
});

interface IrecommendState {
  banners: any[];
  hotRecommends: any[];
}
const initialState: IrecommendState = {
  banners: [],
  hotRecommends: []
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
    }
  }
});

export const { changeBannersAction, changeHotRecommendAction } = recommendSlice.actions;
export default recommendSlice.reducer;
