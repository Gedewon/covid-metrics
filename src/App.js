import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Detail from './component/Detail/Detail';
import Error404 from './component/commonComponent/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail">
        <Route path=":continent" element={<Detail />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
