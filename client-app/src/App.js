import {
  Routes,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Browse from "./components/Browse"; 
import Cart from "./components/Cart";
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Browse />} />
          <Route path="browse" element={<Browse />} />
          <Route path="cart" element={<Cart />} />
        </Route>
    </Routes>
  );
}

export default App;
