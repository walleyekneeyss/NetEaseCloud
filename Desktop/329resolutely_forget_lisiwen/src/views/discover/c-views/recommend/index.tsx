import { useAppDispatch } from '@/store';
import React, { memo, useEffect } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { featchBannersDataAction } from './store/recommend';
import TapBanner from './c-cpns/tap-banner';
interface IProps {
  children?: React.ReactNode;
}

const Recommend: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  /**获取banners轮播图数据 */
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(featchBannersDataAction());
  }, []);
  /** return 就是render 的jsx模版语法 */
  return (
    <div>
      <TapBanner />
      Recommend推荐
    </div>
  );
};
export default memo(Recommend);
