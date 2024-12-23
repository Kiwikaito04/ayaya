// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Home from './Home';
// import Schedule from './Schedule';
// import Login from './Components/Login';
// import Signup from './Components/Signup'
// import About from './About';
// import RoomSearch from './RoomSearch';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/schedule" element={<Schedule />} />
//           <Route path='/signup' element={<Signup />} />
//           <Route path='/login' element={<Login />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/lookup" element={<RoomSearch />} />

//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Home';
import Schedule from './Schedule';
import Login from './Components/Login';
import Signup from './Components/Signup'
import About from './About';
import RoomSearch from './RoomSearch';
import RoomManagerContent from './BeManager/RoomManager/RoomManagerContent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/lookup" element={<RoomSearch />} /> */}

          <Route path="/" element={<RoomManagerContent />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
