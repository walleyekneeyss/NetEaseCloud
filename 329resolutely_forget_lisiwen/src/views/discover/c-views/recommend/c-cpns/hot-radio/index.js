import React, { memo } from 'react';

import { hotRadios } from '@/assets/data/local-data';

import HYThemeHeaderSmall from '@/components/theme-header-small';
import { HotRadioWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';

export default memo(function HYHotRadio() {
  return (
    <HotRadioWrapper>
      <AreaHeaderV1 title="热门主播" />
      <div className="radio-list">
        {hotRadios &&
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/abc" className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            );
          })}
      </div>
    </HotRadioWrapper>
  );
});
