import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' caseSensitive={false} element={<Home />} />
        <Route path='/products' caseSensitive={false} element={<Products />} />
      </Routes>
    </>
  );
}
export default App;