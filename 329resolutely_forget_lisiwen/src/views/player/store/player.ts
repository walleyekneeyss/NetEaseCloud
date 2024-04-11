import { createSlice } from '@reduxjs/toolkit';

interface IPlayerState {
  currentSong: any;
}
const initialState: IPlayerState = {
  currentSong: {
    name: '不露声色',
    id: 470759757,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 1071031,
        name: 'Jam',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: null,
    fee: 8,
    v: 29,
    crbt: null,
    cf: '',
    al: {
      id: 35346446,
      name: '不露声色',
      picUrl: 'https://p1.music.126.net/o9H3nhgOCK7zYQ4DGZkd5A==/19066631137330769.jpg',
      tns: [],
      pic_str: '19066631137330769',
      pic: 19066631137330770
    },
    dt: 305593,
    h: {
      br: 320000,
      fid: 0,
      size: 12226395,
      vd: -39686,
      sr: 44100
    },
    m: {
      br: 192000,
      fid: 0,
      size: 7335854,
      vd: -37054,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4890584,
      vd: -35282,
      sr: 44100
    },
    sq: {
      br: 761327,
      fid: 0,
      size: 29082050,
      vd: -39752,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '1',
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 2,
    s_id: 0,
    mark: 17179877376,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 29,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 0,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 0,
    publishTime: 1491753600007
  }
};

const playerSlice = createSlice({
  // 创建slice片段
  name: 'player',
  initialState,
  reducers: {}
});

export default playerSlice.reducer;
