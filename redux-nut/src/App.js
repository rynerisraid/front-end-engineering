
import { useState } from 'react';
import './App.css';
//import HooksPage from './pages/HooksPage';
//import ReduxPage from './pages/ReduxPage';
//import ReactReduxPage from './pages/ReactReduxPage';
import ReactReduxHookPage from './pages/ReactReduxHookPage'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      {/* <ReduxPage/> */}
      {/* <HooksPage/> */}
      <button onClick={()=>setCount(count+1)}>{count}</button>
      {/* <ReactReduxPage omg={count}/> */}
      <ReactReduxHookPage/>
    </div>
  );
}

export default App;
