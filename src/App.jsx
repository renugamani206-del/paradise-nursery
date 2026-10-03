import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for
          beautiful and healthy houseplants.
        </p>

        <button
          className="get-started-btn"
          onClick={() => window.location.href = "/plants"}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;