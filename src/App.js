import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Home';
import Schedule from './Schedule';
<<<<<<< HEAD
import Login from './Components/Login';
import Signup from './Components/Signup'
=======
import Server from './Server'
>>>>>>> 5e966189d8b5afd5356dd5d6e0b558344b39de4e

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
<<<<<<< HEAD
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
=======
          <Route path="/server" element={<Server />} />
>>>>>>> 5e966189d8b5afd5356dd5d6e0b558344b39de4e
        </Routes>
      </Router>
    </div>
  );
}

export default App;
