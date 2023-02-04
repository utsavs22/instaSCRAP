import './App.css';
import UserContext from './context/UserContext';
import Navbar from './components/Navbar/Navbar';
import Scrappers from './components/Scrappers/Scrappers';
import { useContext } from 'react';
import Login from './pages/Login/Login';
import {Routes, Route} from "react-router-dom"
import Signup from './pages/Signup/Signup';

function App() {
const context = useContext(UserContext);
const{user} = context
  return (
      <div className="sections">
          <Navbar/>
          <Routes>
            <Route exact path = "/login" element = {<Login/>}></Route>
            <Route exact path = "/signup" element = {<Signup/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
