import './App.css';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom'
import Products from './components/Products/Products';
import Cart from './components/Products/Cart';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/products' element={< Products />} />
        <Route path='/cart' element={< Cart />} />
      </Routes>
    </div>
  );
}
export default App;
