import { createSlice } from '@reduxjs/toolkit';

interface IPlayerState {
  currentSong: any;
}
const initialState: IPlayerState = {
  currentSong: {
    name: '虚拟',
    id: 421423808,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 1007170,
        name: '陈粒',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: null,
    fee: 8,
    v: 41,
    crbt: null,
    cf: '',
    al: {
      id: 34780579,
      name: '小梦大半',
      picUrl: 'https://p1.music.126.net/HQxTggMCB7AHUXN-ZFEtmA==/1371091013186741.jpg',
      tns: [],
      pic: 1371091013186741
    },
    dt: 240626,
    h: {
      br: 320000,
      fid: 0,
      size: 9627733,
      vd: -7979,
      sr: 44100
    },
    m: {
      br: 192000,
      fid: 0,
      size: 5776657,
      vd: -5352,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3851119,
      vd: -3597,
      sr: 44100
    },
    sq: {
      br: 765421,
      fid: 0,
      size: 23022596,
      vd: -9752,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '1',
    no: 9,
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
    version: 41,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 5368127,
    mst: 9,
    cp: 1416476,
    rtype: 0,
    rurl: null,
    publishTime: 1469462400007
  }
};

const playerSlice = createSlice({
  // 创建slice片段
  name: 'player',
  initialState,
  reducers: {}
});

export default playerSlice.reducer;
