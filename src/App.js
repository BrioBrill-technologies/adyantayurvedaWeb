import Home from './Components/Home';
import Land from './Components/Land';
import Login from './Components/Pages/Login';
import Reset from './Components/Pages/Reset';
import Register from './Components/Pages/Register';
import {
  Routes,
  Route,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route exact path="/" element={<Land />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Home />} />
        </Routes>
    </div>
  );
}


export default App;
