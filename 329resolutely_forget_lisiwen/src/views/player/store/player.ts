import { createSlice } from '@reduxjs/toolkit';

interface IPlayerState {
  currentSong: any;
}
const initialState: IPlayerState = {
  // currentSong: {
  //   name: '我是真的爱上你',
  //   id: 536462878,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 13180086,
  //       name: '江一位',
  //       tns: [],
  //       alias: []
  //     }
  //   ],
  //   alia: [],
  //   pop: 90,
  //   st: 0,
  //   rt: null,
  //   fee: 0,
  //   v: 30,
  //   crbt: null,
  //   cf: '',
  //   al: {
  //     id: 37549356,
  //     name: '翻唱几首',
  //     picUrl: 'https://p2.music.126.net/XosnhgKTVYx7OVdroQz7YQ==/109951163136934296.jpg',
  //     tns: [],
  //     pic_str: '109951163136934296',
  //     pic: 109951163136934300
  //   },
  //   dt: 296939,
  //   h: {
  //     br: 320000,
  //     fid: 0,
  //     size: 11889938,
  //     vd: -13942,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192000,
  //     fid: 0,
  //     size: 7133980,
  //     vd: -13942,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128000,
  //     fid: 0,
  //     size: 4756001,
  //     vd: -13942,
  //     sr: 44100
  //   },
  //   sq: null,
  //   hr: null,
  //   a: null,
  //   cd: '01',
  //   no: 1,
  //   rtUrl: null,
  //   ftype: 0,
  //   rtUrls: [],
  //   djId: 0,
  //   copyright: 2,
  //   s_id: 0,
  //   mark: 0,
  //   originCoverType: 0,
  //   originSongSimpleData: null,
  //   tagPicList: null,
  //   resourceState: true,
  //   version: 30,
  //   songJumpInfo: null,
  //   entertainmentTags: null,
  //   awardTags: null,
  //   single: 0,
  //   noCopyrightRcmd: null,
  //   mv: 0,
  //   mst: 9,
  //   cp: 0,
  //   rtype: 0,
  //   rurl: null,
  //   publishTime: 1518018892647
  // }
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
  // currentSong: {
  //   name: '欢',
  //   id: 1383972145,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 1146106,
  //       name: '苏琛',
  //       tns: [],
  //       alias: []
  //     }
  //   ],
  //   alia: [],
  //   pop: 100,
  //   st: 0,
  //   rt: '',
  //   fee: 8,
  //   v: 28,
  //   crbt: null,
  //   cf: '',
  //   al: {
  //     id: 80884413,
  //     name: '欢',
  //     picUrl: 'https://p1.music.126.net/mOSNIvgpJWt4auIYyx1B1g==/109951164290372733.jpg',
  //     tns: [],
  //     pic_str: '109951164290372733',
  //     pic: 109951164290372740
  //   },
  //   dt: 162957,
  //   h: {
  //     br: 320000,
  //     fid: 0,
  //     size: 6521252,
  //     vd: -56783,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192000,
  //     fid: 0,
  //     size: 3912769,
  //     vd: -54145,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128000,
  //     fid: 0,
  //     size: 2608527,
  //     vd: -52360,
  //     sr: 44100
  //   },
  //   sq: {
  //     br: 1444060,
  //     fid: 0,
  //     size: 29415085,
  //     vd: -56781,
  //     sr: 44100
  //   },
  //   hr: null,
  //   a: null,
  //   cd: '01',
  //   no: 1,
  //   rtUrl: null,
  //   ftype: 0,
  //   rtUrls: [],
  //   djId: 0,
  //   copyright: 0,
  //   s_id: 0,
  //   mark: 17179877440,
  //   originCoverType: 1,
  //   originSongSimpleData: null,
  //   tagPicList: null,
  //   resourceState: true,
  //   version: 28,
  //   songJumpInfo: null,
  //   entertainmentTags: null,
  //   awardTags: null,
  //   single: 0,
  //   noCopyrightRcmd: null,
  //   mv: 0,
  //   rtype: 0,
  //   rurl: null,
  //   mst: 9,
  //   cp: 0,
  //   publishTime: 1565625600000
  // }
};

const playerSlice = createSlice({
  // 创建slice片段
  name: 'player',
  initialState,
  reducers: {}
});

export default playerSlice.reducer;
