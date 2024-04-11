import { useAppDispatch } from '@/store';
import React, { memo, useEffect } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import {
  featchBannersDataAction,
  featchHotRecommendAction,
  featchNewAlbumAction,
  featchRankingAction
} from './store/recommend';
import TapBanner from './c-cpns/tap-banner';
// import styles from './Component.module.less';
// //使用 将className='' 改成 className={styles.类名}
// <div className={styles.eg1}> </div>;   less使用

import { RecommendWrapper } from './style';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import TapRanking from './c-cpns/top-ranking';
import HYUserLogin from './c-cpns/user-login'; // 用户登录
import HYSettleSinger from './c-cpns/settle-singer'; // 入驻歌手
import HYHotRadio from './c-cpns/hot-radio'; // 热门主播
interface IProps {
  children?: React.ReactNode;
}

const Recommend: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  /**获取banners轮播图数据 */
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(featchBannersDataAction());
    dispatch(featchHotRecommendAction()); // 获取横幅banner轮播图，热门推荐
    dispatch(featchNewAlbumAction()); // 获取新碟上架数据
    dispatch(featchRankingAction()); // 获取榜单数据
  }, []);
  /** return 就是render 的jsx模版语法 */
  return (
    <div className="icon_wrwwwrfre">
      <RecommendWrapper>
        <TapBanner />
        <div className="content wrap-v2">
          <div className="left">
            <HotRecommend />
            <NewAlbum />
            <TapRanking />
          </div>
          <div className="right">
            <HYUserLogin />
            <HYSettleSinger />
            <HYHotRadio />
          </div>
        </div>
      </RecommendWrapper>
    </div>
  );
};
export default memo(Recommend);
