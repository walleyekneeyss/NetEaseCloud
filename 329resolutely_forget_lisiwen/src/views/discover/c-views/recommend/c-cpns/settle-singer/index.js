import React, { memo } from 'react';

import { settleSingers } from '@/assets/data/local-data';
import HYThemeHeaderSmall from '@/components/theme-header-small';
import { SetterSongerWrapper } from './style';
import { getImageSize } from '@/utils/format';

export default memo(function HYSettleSinger() {
  return (
    <SetterSongerWrapper>
      <HYThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {settleSingers &&
          settleSingers.map((item, index) => {
            return (
              <a href="/singer" key={item.id} className="item">
                <img src={getImageSize(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join('') || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            );
          })}
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  );
});
