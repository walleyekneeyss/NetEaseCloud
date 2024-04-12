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
  // currentSong: {
  //   name: '虚拟',
  //   id: 421423808,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 1007170,
  //       name: '陈粒',
  //       tns: [],
  //       alias: []
  //     }
  //   ],
  //   alia: [],
  //   pop: 100,
  //   st: 0,
  //   rt: null,
  //   fee: 8,
  //   v: 41,
  //   crbt: null,
  //   cf: '',
  //   al: {
  //     id: 34780579,
  //     name: '小梦大半',
  //     picUrl: 'https://p1.music.126.net/HQxTggMCB7AHUXN-ZFEtmA==/1371091013186741.jpg',
  //     tns: [],
  //     pic: 1371091013186741
  //   },
  //   dt: 240626,
  //   h: {
  //     br: 320000,
  //     fid: 0,
  //     size: 9627733,
  //     vd: -7979,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192000,
  //     fid: 0,
  //     size: 5776657,
  //     vd: -5352,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128000,
  //     fid: 0,
  //     size: 3851119,
  //     vd: -3597,
  //     sr: 44100
  //   },
  //   sq: {
  //     br: 765421,
  //     fid: 0,
  //     size: 23022596,
  //     vd: -9752,
  //     sr: 44100
  //   },
  //   hr: null,
  //   a: null,
  //   cd: '1',
  //   no: 9,
  //   rtUrl: null,
  //   ftype: 0,
  //   rtUrls: [],
  //   djId: 0,
  //   copyright: 2,
  //   s_id: 0,
  //   mark: 17179877376,
  //   originCoverType: 1,
  //   originSongSimpleData: null,
  //   tagPicList: null,
  //   resourceState: true,
  //   version: 41,
  //   songJumpInfo: null,
  //   entertainmentTags: null,
  //   awardTags: null,
  //   single: 0,
  //   noCopyrightRcmd: null,
  //   mv: 5368127,
  //   mst: 9,
  //   cp: 1416476,
  //   rtype: 0,
  //   rurl: null,
  //   publishTime: 1469462400007
  // }
  currentSong: {
    name: '椿',
    id: 479598964,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 12002248,
        name: '沈以诚',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: null,
    fee: 8,
    v: 108,
    crbt: null,
    cf: '',
    al: {
      id: 35533615,
      name: '椿',
      picUrl: 'https://p1.music.126.net/CpwIPy2YUWC6ksF88eGNyw==/109951162931819035.jpg',
      tns: [],
      pic_str: '109951162931819035',
      pic: 109951162931819040
    },
    dt: 217640,
    h: null,
    m: {
      br: 192000,
      fid: 0,
      size: 5224951,
      vd: 20685,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3483315,
      vd: 22473,
      sr: 44100
    },
    sq: {
      br: 1275020,
      fid: 0,
      size: 34687046,
      vd: 18037,
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
    copyright: 0,
    s_id: 0,
    mark: 17179877440,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 108,
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
    publishTime: 1495263051414
  }
  // currentSong: {
  //   name: '无泪的遗憾',
  //   id: 347114,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 11127,
  //       name: 'Beyond',
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
  //     id: 34195,
  //     name: '黄家驹原作精选集 CD1',
  //     picUrl: 'https://p1.music.126.net/hE8ESyyp1XkS7D1lEXmsIg==/37383395356406.jpg',
  //     tns: [],
  //     pic: 37383395356406
  //   },
  //   dt: 321758,
  //   h: {
  //     br: 320000,
  //     fid: 0,
  //     size: 12873187,
  //     vd: -15941,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192000,
  //     fid: 0,
  //     size: 7723929,
  //     vd: -13389,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128000,
  //     fid: 0,
  //     size: 5149301,
  //     vd: -11685,
  //     sr: 44100
  //   },
  //   sq: {
  //     br: 1577458,
  //     fid: 0,
  //     size: 63445176,
  //     vd: -16038,
  //     sr: 44100
  //   },
  //   hr: null,
  //   a: null,
  //   cd: '1',
  //   no: 3,
  //   rtUrl: null,
  //   ftype: 0,
  //   rtUrls: [],
  //   djId: 0,
  //   copyright: 1,
  //   s_id: 0,
  //   mark: 17179877376,
  //   originCoverType: 0,
  //   originSongSimpleData: null,
  //   tagPicList: null,
  //   resourceState: true,
  //   version: 28,
  //   songJumpInfo: null,
  //   entertainmentTags: null,
  //   awardTags: null,
  //   single: 0,
  //   noCopyrightRcmd: null,
  //   rtype: 0,
  //   mst: 9,
  //   cp: 7003,
  //   rurl: null,
  //   mv: 5393440,
  //   publishTime: 788889600000
  // }

  // currentSong: {
  //   name: '理想三旬',
  //   id: 31445772,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 1058228,
  //       name: '陈鸿宇',
  //       tns: [],
  //       alias: []
  //     }
  //   ],
  //   alia: [],
  //   pop: 100,
  //   st: 0,
  //   rt: null,
  //   fee: 8,
  //   v: 172,
  //   crbt: null,
  //   cf: '',
  //   al: {
  //     id: 3116882,
  //     name: '浓烟下的诗歌电台',
  //     picUrl: 'https://p2.music.126.net/ryk8Gu64rOhlYn0pc2Q8Ww==/109951168090271827.jpg',
  //     tns: [],
  //     pic_str: '109951168090271827',
  //     pic: 109951168090271820
  //   },
  //   dt: 210814,
  //   h: {
  //     br: 320000,
  //     fid: 0,
  //     size: 8435505,
  //     vd: -39595,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192000,
  //     fid: 0,
  //     size: 5061320,
  //     vd: -36953,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128000,
  //     fid: 0,
  //     size: 3374228,
  //     vd: -35162,
  //     sr: 44100
  //   },
  //   sq: {
  //     br: 741387,
  //     fid: 0,
  //     size: 19536884,
  //     vd: -39594,
  //     sr: 44100
  //   },
  //   hr: null,
  //   a: null,
  //   cd: '1',
  //   no: 5,
  //   rtUrl: null,
  //   ftype: 0,
  //   rtUrls: [],
  //   djId: 0,
  //   copyright: 2,
  //   s_id: 0,
  //   mark: 17179877440,
  //   originCoverType: 1,
  //   originSongSimpleData: null,
  //   tagPicList: null,
  //   resourceState: true,
  //   version: 172,
  //   songJumpInfo: null,
  //   entertainmentTags: null,
  //   awardTags: null,
  //   single: 0,
  //   noCopyrightRcmd: null,
  //   mv: 10908062,
  //   rtype: 0,
  //   rurl: null,
  //   mst: 9,
  //   cp: 456010,
  //   publishTime: 1451491200000
  // }
  // currentSong: {
  //   name: '世子',
  //   id: 546961330,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 12256806,
  //       name: '三旬老汉',
  //       tns: [],
  //       alias: []
  //     }
  //   ],
  //   alia: [],
  //   pop: 95,
  //   st: 0,
  //   rt: null,
  //   fee: 0,
  //   v: 29,
  //   crbt: null,
  //   cf: '',
  //   al: {
  //     id: 37996084,
  //     name: '行走世上',
  //     picUrl: 'https://p2.music.126.net/ebD5LAwnznkCmi-BGQHAYw==/109951163200773622.jpg',
  //     tns: [],
  //     pic_str: '109951163200773622',
  //     pic: 109951163200773620
  //   },
  //   dt: 205510,
  //   h: {
  //     br: 320000,
  //     fid: 0,
  //     size: 8223391,
  //     vd: -9347,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192000,
  //     fid: 0,
  //     size: 4934052,
  //     vd: -6705,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128000,
  //     fid: 0,
  //     size: 3289382,
  //     vd: -4907,
  //     sr: 44100
  //   },
  //   sq: {
  //     br: 1390474,
  //     fid: 0,
  //     size: 35719647,
  //     vd: -9141,
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
  //   copyright: 2,
  //   s_id: 0,
  //   mark: 64,
  //   originCoverType: 1,
  //   originSongSimpleData: null,
  //   tagPicList: null,
  //   resourceState: true,
  //   version: 29,
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
  //   publishTime: 1521561600000
  // }
  // currentSong: {
  //   name: '旧日的足迹',
  //   id: 347537,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 11127,
  //       name: 'Beyond',
  //       tns: [],
  //       alias: []
  //     }
  //   ],
  //   alia: [],
  //   pop: 100,
  //   st: 0,
  //   rt: '600902000005287981',
  //   fee: 8,
  //   v: 31,
  //   crbt: null,
  //   cf: '',
  //   al: {
  //     id: 34241,
  //     name: 'Control',
  //     picUrl: 'https://p2.music.126.net/_hBhAUEbkSnW534QiqsRwQ==/109951166350502185.jpg',
  //     tns: [],
  //     pic_str: '109951166350502185',
  //     pic: 109951166350502190
  //   },
  //   dt: 321800,
  //   h: {
  //     br: 320000,
  //     fid: 0,
  //     size: 12874231,
  //     vd: 30168,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192000,
  //     fid: 0,
  //     size: 7724556,
  //     vd: 32705,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128000,
  //     fid: 0,
  //     size: 5149719,
  //     vd: 34314,
  //     sr: 44100
  //   },
  //   sq: {
  //     br: 1047000,
  //     fid: 0,
  //     size: 36292898,
  //     vd: 30194,
  //     sr: 44100
  //   },
  //   hr: null,
  //   a: null,
  //   cd: '1',
  //   no: 6,
  //   rtUrl: null,
  //   ftype: 0,
  //   rtUrls: [],
  //   djId: 0,
  //   copyright: 1,
  //   s_id: 0,
  //   mark: 17179877376,
  //   originCoverType: 1,
  //   originSongSimpleData: null,
  //   tagPicList: null,
  //   resourceState: true,
  //   version: 31,
  //   songJumpInfo: null,
  //   entertainmentTags: null,
  //   awardTags: null,
  //   single: 0,
  //   noCopyrightRcmd: null,
  //   mv: 5336879,
  //   rtype: 0,
  //   rurl: null,
  //   mst: 9,
  //   cp: 7003,
  //   publishTime: 694195200000,
  //   tns: ["Yesterday's Footprints"]
  // }
  // currentSong: {
  //   name: '知秋',
  //   id: 509343394,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 12270575,
  //       name: '孟凡明',
  //       tns: [],
  //       alias: []
  //     }
  //   ],
  //   alia: [],
  //   pop: 100,
  //   st: 0,
  //   rt: null,
  //   fee: 8,
  //   v: 53,
  //   crbt: null,
  //   cf: '',
  //   al: {
  //     id: 36417464,
  //     name: '知秋',
  //     picUrl: 'https://p1.music.126.net/S5yHzeie-bEEJ5XYYCVHFA==/109951163032187445.jpg',
  //     tns: [],
  //     pic_str: '109951163032187445',
  //     pic: 109951163032187440
  //   },
  //   dt: 250000,
  //   h: {
  //     br: 320001,
  //     fid: 0,
  //     size: 10002852,
  //     vd: -5388,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192001,
  //     fid: 0,
  //     size: 6001729,
  //     vd: -2749,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128001,
  //     fid: 0,
  //     size: 4001167,
  //     vd: -946,
  //     sr: 44100
  //   },
  //   sq: {
  //     br: 653716,
  //     fid: 0,
  //     size: 20428641,
  //     vd: -5219,
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
  //   version: 53,
  //   songJumpInfo: null,
  //   entertainmentTags: null,
  //   awardTags: null,
  //   single: 0,
  //   noCopyrightRcmd: null,
  //   rtype: 0,
  //   rurl: null,
  //   mst: 9,
  //   cp: 0,
  //   mv: 0,
  //   publishTime: 1506504941078
  // }
  // currentSong: {
  //   name: 'canon in d',
  //   id: 1091088,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 29377,
  //       name: 'Brian Crain',
  //       tns: [],
  //       alias: []
  //     }
  //   ],
  //   alia: [],
  //   pop: 100,
  //   st: 0,
  //   rt: '',
  //   fee: 8,
  //   v: 122,
  //   crbt: null,
  //   cf: '',
  //   al: {
  //     id: 113405,
  //     name: 'Piano Opus',
  //     picUrl: 'https://p1.music.126.net/QGb9Vtyw7qHS00uEvPfM6g==/843325418547559.jpg',
  //     tns: [],
  //     pic: 843325418547559
  //   },
  //   dt: 311611,
  //   h: {
  //     br: 320000,
  //     fid: 0,
  //     size: 12464631,
  //     vd: 32583,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192000,
  //     fid: 0,
  //     size: 7478796,
  //     vd: 35229,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128000,
  //     fid: 0,
  //     size: 4985879,
  //     vd: 37044,
  //     sr: 44100
  //   },
  //   sq: null,
  //   hr: null,
  //   a: null,
  //   cd: '1',
  //   no: 12,
  //   rtUrl: null,
  //   ftype: 0,
  //   rtUrls: [],
  //   djId: 0,
  //   copyright: 2,
  //   s_id: 0,
  //   mark: 17180008448,
  //   originCoverType: 1,
  //   originSongSimpleData: null,
  //   tagPicList: null,
  //   resourceState: true,
  //   version: 122,
  //   songJumpInfo: null,
  //   entertainmentTags: null,
  //   awardTags: null,
  //   single: 0,
  //   noCopyrightRcmd: null,
  //   mv: 0,
  //   rtype: 0,
  //   rurl: null,
  //   mst: 9,
  //   cp: 743010,
  //   publishTime: 1230739200000
  // }s
  // currentSong: {
  //   name: '总有一天你会出现在我身边',
  //   id: 1303027499,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 1085047,
  //       name: '棱镜乐队',
  //       tns: [],
  //       alias: []
  //     }
  //   ],
  //   alia: [],
  //   pop: 100,
  //   st: 0,
  //   rt: null,
  //   fee: 8,
  //   v: 44,
  //   crbt: null,
  //   cf: '',
  //   al: {
  //     id: 73702798,
  //     name: '一次有预谋的初次相遇',
  //     picUrl: 'https://p1.music.126.net/RfUHXkanpxImcaGqFNWBeA==/109951163598901405.jpg',
  //     tns: [],
  //     pic_str: '109951163598901405',
  //     pic: 109951163598901400
  //   },
  //   dt: 270000,
  //   h: {
  //     br: 320001,
  //     fid: 0,
  //     size: 10802199,
  //     vd: -44926,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192001,
  //     fid: 0,
  //     size: 6481337,
  //     vd: -42295,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128001,
  //     fid: 0,
  //     size: 4320906,
  //     vd: -40530,
  //     sr: 44100
  //   },
  //   sq: {
  //     br: 758284,
  //     fid: 0,
  //     size: 25592099,
  //     vd: -44983,
  //     sr: 44100
  //   },
  //   hr: null,
  //   a: null,
  //   cd: '1',
  //   no: 1,
  //   rtUrl: null,
  //   ftype: 0,
  //   rtUrls: [],
  //   djId: 0,
  //   copyright: 2,
  //   s_id: 0,
  //   mark: 17179877376,
  //   originCoverType: 1,
  //   originSongSimpleData: null,
  //   tagPicList: null,
  //   resourceState: true,
  //   version: 44,
  //   songJumpInfo: null,
  //   entertainmentTags: null,
  //   awardTags: null,
  //   single: 0,
  //   noCopyrightRcmd: null,
  //   mv: 14479273,
  //   rtype: 0,
  //   rurl: null,
  //   mst: 9,
  //   cp: 0,
  //   publishTime: 1535212800000
  // }
  // currentSong: {
  //   name: '吟游诗人',
  //   id: 467958357,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 12359437,
  //       name: '李常超 (Lao乾妈)',
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
  //     id: 35311179,
  //     name: '寻歌启事',
  //     picUrl: 'https://p2.music.126.net/418URszFbM3SkgH5RcZTAQ==/109951162884470492.jpg',
  //     tns: [],
  //     pic_str: '109951162884470492',
  //     pic: 109951162884470500
  //   },
  //   dt: 213864,
  //   h: {
  //     br: 320000,
  //     fid: 0,
  //     size: 8556713,
  //     vd: -44346,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192000,
  //     fid: 0,
  //     size: 5134045,
  //     vd: -41728,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128000,
  //     fid: 0,
  //     size: 3422711,
  //     vd: -40037,
  //     sr: 44100
  //   },
  //   sq: null,
  //   hr: null,
  //   a: null,
  //   cd: '1',
  //   no: 3,
  //   rtUrl: null,
  //   ftype: 0,
  //   rtUrls: [],
  //   djId: 0,
  //   copyright: 2,
  //   s_id: 0,
  //   mark: 64,
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
  //   publishTime: 1490328602099
  // }
  // currentSong: {
  //   name: '奇妙能力歌',
  //   id: 30431366,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 1007170,
  //       name: '陈粒',
  //       tns: [],
  //       alias: []
  //     }
  //   ],
  //   alia: [],
  //   pop: 100,
  //   st: 0,
  //   rt: null,
  //   fee: 8,
  //   v: 34,
  //   crbt: null,
  //   cf: '',
  //   al: {
  //     id: 3098832,
  //     name: '如也',
  //     picUrl: 'https://p1.music.126.net/VuJFMbXzpAProbJPoXLv7g==/7721870161993398.jpg',
  //     tns: [],
  //     pic: 7721870161993398
  //   },
  //   dt: 253090,
  //   h: {
  //     br: 320001,
  //     fid: 0,
  //     size: 10126150,
  //     vd: -30699,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192001,
  //     fid: 0,
  //     size: 6075707,
  //     vd: -28067,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128001,
  //     fid: 0,
  //     size: 4050486,
  //     vd: -26299,
  //     sr: 44100
  //   },
  //   sq: {
  //     br: 772767,
  //     fid: 0,
  //     size: 24447557,
  //     vd: -30653,
  //     sr: 44100
  //   },
  //   hr: null,
  //   a: null,
  //   cd: '1',
  //   no: 3,
  //   rtUrl: null,
  //   ftype: 0,
  //   rtUrls: [],
  //   djId: 0,
  //   copyright: 2,
  //   s_id: 0,
  //   mark: 17179877376,
  //   originCoverType: 1,
  //   originSongSimpleData: null,
  //   tagPicList: null,
  //   resourceState: true,
  //   version: 34,
  //   songJumpInfo: null,
  //   entertainmentTags: null,
  //   awardTags: null,
  //   single: 0,
  //   noCopyrightRcmd: null,
  //   mv: 5393290,
  //   rtype: 0,
  //   rurl: null,
  //   mst: 9,
  //   cp: 753020,
  //   publishTime: 1422806400007
  // }

  // currentSong: {
  //   name: '分分钟需要你（remix）（翻自 林子祥）',
  //   id: 1372064991,
  //   pst: 0,
  //   t: 0,
  //   ar: [
  //     {
  //       id: 28187912,
  //       name: '麻烦',
  //       tns: [],
  //       alias: []
  //     },
  //     {
  //       id: 0,
  //       name: '怡静',
  //       tns: [],
  //       alias: []
  //     }
  //   ],
  //   alia: [],
  //   pop: 25,
  //   st: 0,
  //   rt: '',
  //   fee: 0,
  //   v: 11,
  //   crbt: null,
  //   cf: '',
  //   al: {
  //     id: 79780223,
  //     name: '分分钟需要你 (remix)',
  //     picUrl: 'https://p1.music.126.net/87jmboTRTa1rDebZG08RBQ==/109951164150595920.jpg',
  //     tns: [],
  //     pic_str: '109951164150595920',
  //     pic: 109951164150595920
  //   },
  //   dt: 224037,
  //   h: {
  //     br: 320000,
  //     fid: 0,
  //     size: 8964223,
  //     vd: -7563,
  //     sr: 44100
  //   },
  //   m: {
  //     br: 192000,
  //     fid: 0,
  //     size: 5378551,
  //     vd: -4935,
  //     sr: 44100
  //   },
  //   l: {
  //     br: 128000,
  //     fid: 0,
  //     size: 3585715,
  //     vd: -3216,
  //     sr: 44100
  //   },
  //   sq: {
  //     br: 2822000,
  //     fid: 0,
  //     size: 41914668,
  //     vd: -7562,
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
  //   mark: 0,
  //   originCoverType: 2,
  //   originSongSimpleData: {
  //     songId: 1294520851,
  //     name: '分分钟需要你',
  //     artists: [
  //       {
  //         id: 3706,
  //         name: '林子祥'
  //       }
  //     ],
  //     albumMeta: {
  //       id: 71814596,
  //       name: '真情精选'
  //     }
  //   },
  //   tagPicList: null,
  //   resourceState: true,
  //   version: 11,
  //   songJumpInfo: null,
  //   entertainmentTags: null,
  //   awardTags: null,
  //   single: 0,
  //   noCopyrightRcmd: null,
  //   mv: 0,
  //   rurl: null,
  //   mst: 9,
  //   cp: 0,
  //   rtype: 0,
  //   publishTime: 0
  // }
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
