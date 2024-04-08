import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, shallowEqual, useDispatch } from 'react-redux'; // 初始store state shallowEqual 浅层比较
import counterReducer from './modules/counter';
import recommendReducer from '../views/discover/c-views/recommend/store/recommend';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
});

type GetStateFnType = typeof store.getState;
type IStateFnType = ReturnType<GetStateFnType>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IStateFnType> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const shallowEqualApp = shallowEqual;
// 调过去就推导出来 useSelector赋值给他，函数调用签名 更新函数签名为<IState> 函数签名能确定参数类型和返回值 type写等号 interface 写接口
/*
  interface IFnCall {
   (num1:number):string
  }
  const foo:IFnCall= function(nun1){}
  foo(123)
  */
export default store;
