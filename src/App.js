import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home'
import About from './Routes/About';
// import Leadership from './Routes/Leadership';
import CelebalLife from './Routes/CelebalLife';
import GetInTouch from './Routes/GetInTouch';
import Careers from './Routes/Careers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/life@celebal' element={<CelebalLife />} />
          <Route path='/contact' element={<GetInTouch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
