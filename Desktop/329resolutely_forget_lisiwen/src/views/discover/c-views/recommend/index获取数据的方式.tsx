import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import request from '@/service/request';
import { useState } from 'react';
import { useEffect } from 'react';
interface IProps {
  children?: React.ReactNode;
}

const Recommend: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const [count, setCount] = useState();

  useEffect(() => {
    request({
      url: '/banner'
    }).then(res => {
      console.log(res);
    });
  }, []);
  return <div>Recommend--推荐</div>;
};
export default memo(Recommend);
