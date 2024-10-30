import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Home';
import Schedule from './Schedule';
<<<<<<< HEAD:frontend/src/App.js
import Login from './Components/Login';
import Signup from './Components/Signup'
=======
<<<<<<< HEAD
import Login from './Components/Login';
import Signup from './Components/Signup'
=======
import Server from './Server'
>>>>>>> 5e966189d8b5afd5356dd5d6e0b558344b39de4e
>>>>>>> cd398f4b871236b8ed2dae437450e2e3639b3cc2:src/App.js

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
<<<<<<< HEAD:frontend/src/App.js
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
=======
<<<<<<< HEAD
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
=======
          <Route path="/server" element={<Server />} />
>>>>>>> 5e966189d8b5afd5356dd5d6e0b558344b39de4e
>>>>>>> cd398f4b871236b8ed2dae437450e2e3639b3cc2:src/App.js
        </Routes>
      </Router>
    </div>
  );
}

export default App;
