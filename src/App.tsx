import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// 导入仓库
import store from './store/index'
import { Provider } from 'react-redux'


// 引入对应的方法
import { increment, decrement } from './store/slice/counter'

// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import type { RootState, AppDispatch } from './store'

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


import { RootState } from './store/index'
import { useSelector,useDispatch } from 'react-redux'

// TS infers type: (state: RootState) => boolean
const selectIsOn = (state: RootState) => state.counter

// TS infers `isOn` is boolean
const isOn = useSelector(selectIsOn)

function App() {
  const [count, setCount] = useState(0)
  // 通过useSelector直接拿到store中定义的value
  const { value } = useSelector((store: RootState) => (store.counter))
  // 通过useDispatch 派发事件
  const dispatch = useDispatch()
  return (
    <div className="App">
      
    <Provider store={store}>

      <p>{value}</p>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        加
      </button>
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        减
      </button>
    </Provider>
  
    </div>
  )
}

export default App
