import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import './styles/App.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
          <Route path='/login' element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
