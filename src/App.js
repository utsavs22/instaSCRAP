import './App.css';
import UserContext from './context/UserContext';
import Navbar from './components/Navbar/Navbar';
import Scrappers from './components/Scrappers/Scrappers';
import { useContext } from 'react';
import Login from './components/Cards/Login/Login';

function App() {
const context = useContext(UserContext);
const{user} = context
  return (
    <div className="App">
      <div className="sections">
          <Navbar/>
          <Scrappers/>
          <Login/>
      </div>
    </div>
  );
}

export default App;
