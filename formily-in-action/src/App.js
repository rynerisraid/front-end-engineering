import './App.css';
import AntdFormPage from '@/pages/AntdFormPage'
import AntdPage from '@/pages/AntdPage';
import ReactPage from '@/pages/ReactPage';
import ReactivePage from './pages/ReactivePage';
function App() {
  return (
    <div className="App">
      <AntdPage/>
      {/* <ReactivePage/> */}
      <ReactPage/>
     
    </div>
  );
}

export default App;
