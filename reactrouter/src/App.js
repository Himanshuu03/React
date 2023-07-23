import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Support from './components/Support';
import Aboutus from './components/Aboutus';
import Labs from './components/Labs';
import Notfound from './components/Notfound';
import MainHeader from './components/MainHeader';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
          <NavLink to="/about">AboutUs</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<MainHeader></MainHeader>}>
        <Route index element={<Home></Home>}/>  
        <Route path='/support' element={<Support></Support>}/>
        <Route path='/about' element={<Aboutus></Aboutus>}/>
        <Route path='/labs' element={<Labs></Labs>}/>
        <Route path="*" element={<Notfound></Notfound>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
