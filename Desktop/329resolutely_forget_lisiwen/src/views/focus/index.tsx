import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
interface IProps {
  children?: React.ReactNode;
}

const Focus: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  return <div>Focus</div>;
};
export default memo(Focus);
