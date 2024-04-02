// icon title alia别名 eject craco npm install @craco/craco/alpha -D  npx eslint .   --  npx eslint --init
import React, { Suspense } from 'react'; //lazy Suspense
import routes from './router';
import { Link, useRoutes } from 'react-router-dom';

import Download from './views/download';

// ts的拿到函数类型，和函数返回值类型
import store, { useAppSelector, useAppDispatch, shallowEqualApp } from './store';
import { changeMessageAction } from './store/modules/counter';

type GetStateFnType = typeof store.getState;
type IStateFnType = ReturnType<GetStateFnType>;

const App = () => {
  const { count, message } = useAppSelector(
    state => ({
      // {return state.counter.count}
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  );

  const dispatch = useAppDispatch();
  const handleChangeMessage = () => {
    // store.dispatch(changeMessageAction('world hello'));
    dispatch(changeMessageAction('hello world'));
  };
  return (
    <div className="App">
      <div className="nav">
        <div>
          {count} --- {message}
          <button onClick={handleChangeMessage}>handleChangeMessage</button>
        </div>
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">我的关注</Link>
        <Link to="/download">下载个护短</Link>
      </div>
      <Suspense fallback="loading.....................">
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
};

export default App;
