import React, { Suspense, memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from './c-cpns/nav-bar';
interface IProps {
  children?: React.ReactNode;
}

const Discover: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  return (
    <div>
      <NavBar />
      <Suspense fallback="loading.....................">
        <Outlet />
      </Suspense>
    </div>
  );
};
export default memo(Discover);
