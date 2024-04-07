import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';

import { NavWrapper } from './style';
import { discoverMenu } from '@/assets/data/local-data';
import { NavLink } from 'react-router-dom';

interface IProps {
  children?: React.ReactNode;
}

const NavBar: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map(item => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          );
        })}
      </div>
    </NavWrapper>
  );
};
export default memo(NavBar);
