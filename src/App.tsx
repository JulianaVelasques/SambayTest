import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductDetails } from './components/ProductDetails';
import { Home } from './pages/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:itemId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
