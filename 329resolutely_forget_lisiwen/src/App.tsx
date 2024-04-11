// icon title alia别名 eject craco npm install @craco/craco/alpha -D  npx eslint .   --  npx eslint --init
import React, { Suspense, useEffect, useState } from 'react'; //lazy Suspense
import routes from './router';
import { Link, useRoutes } from 'react-router-dom';
import './app.less';
import Download from './views/download';
import { debounce } from 'lodash-es';
// ts的拿到函数类型，和函数返回值类型
import store, { useAppSelector, useAppDispatch, shallowEqualApp } from './store';
import { changeMessageAction } from './store/modules/counter';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import AppPlayerBar from './views/player/app-player-bar';

type GetStateFnType = typeof store.getState;
type IStateFnType = ReturnType<GetStateFnType>;

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleMouseEnter = (event: { clientY: number }) => {
    // console.log('handleMouseEnter-AppPlayerBar');
    // const distanceFromBottom = window.innerHeight - event.clientY;
    // if (distanceFromBottom <= 20) {
    //   setIsVisible(true);
    // }
  };
  const handleMouseLeave = (event: { clientY: number }) => {
    // const distanceFromBottom = window.innerHeight - event.clientY;
    // console.log('distanceFromBottom--handleMouseLeave', distanceFromBottom);
    // setIsVisible(false);
  };
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
    // dispatch(changeMessageAction('hello world'));
  };
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading.....................">
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      {/* AppPlayerBar 播放器横幅 工具栏 */}
      <div className={` ${isVisible ? 'active' : ''}`} onMouseEnter={debounce(handleMouseEnter, 500)}>
        <button onClick={debounce(handleMouseEnter, 500)}>这是一个元素,需要点一下</button>
      </div>
      {isVisible && (
        <div
          className={` ${isVisible ? '' : ''}`}
          style={{ height: '67px' }}
          onMouseLeave={debounce(handleMouseLeave, 500)}
        >
          <button style={{ position: 'relative', top: -47 }} onClick={debounce(handleMouseEnter, 500)}>
            这是一个元素,需要点一下
          </button>
          <AppPlayerBar />
        </div>
      )}
    </div>
  );
};

export default App;
