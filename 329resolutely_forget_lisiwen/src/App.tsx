// icon title alia别名 eject craco npm install @craco/craco/alpha -D  npx eslint .   --  npx eslint --init
import React, { Suspense } from 'react'; //lazy Suspense
import routes from './router';
import { Link, useRoutes } from 'react-router-dom';

import Download from './views/download';

// ts的拿到函数类型，和函数返回值类型
import store, { useAppSelector, useAppDispatch, shallowEqualApp } from './store';
import { changeMessageAction } from './store/modules/counter';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';

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
      <AppHeader />
      <Suspense fallback="loading.....................">
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  );
};

export default App;
