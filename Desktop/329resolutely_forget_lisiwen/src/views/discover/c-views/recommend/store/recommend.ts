import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners } from '../service/recommend';

export const featchBannersDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res: any = await getBanners();
  dispatch(changeBannersAction(res.banners));
  console.log(res);
  return res.banners;
});

interface IrecommendState {
  banners: any[];
}
const initialState: IrecommendState = {
  banners: []
};
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    }
  }
});

export const { changeBannersAction } = recommendSlice.actions;
export default recommendSlice.reducer;
