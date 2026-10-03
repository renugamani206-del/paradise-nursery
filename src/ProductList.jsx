import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 299,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Medicinal Plants",
    price: 399,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Lavender",
    category: "Medicinal Plants",
    price: 349,
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Mint Plant",
    category: "Medicinal Plants",
    price: 199,
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Tulsi",
    category: "Medicinal Plants",
    price: 249,
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d106c3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Rosemary",
    category: "Medicinal Plants",
    price: 299,
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 7,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    price: 449,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Spider Plant",
    category: "Air Purifying Plants",
    price: 299,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Areca Palm",
    category: "Air Purifying Plants",
    price: 599,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Rubber Plant",
    category: "Air Purifying Plants",
    price: 499,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Boston Fern",
    category: "Air Purifying Plants",
    price: 399,
    image: "https://images.unsplash.com/photo-1597055181300-df90d1c8e7c5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Bamboo Palm",
    category: "Air Purifying Plants",
    price: 549,
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 13,
    name: "Monstera",
    category: "Decorative Plants",
    price: 699,
    image: "https://images.unsplash.com/photo-1614594576931-0c4a9b8f2f6e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Calathea",
    category: "Decorative Plants",
    price: 599,
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Fiddle Leaf Fig",
    category: "Decorative Plants",
    price: 799,
    image: "https://images.unsplash.com/photo-1597055181449-0c4e6b2a0b4d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "ZZ Plant",
    category: "Decorative Plants",
    price: 499,
    image: "https://images.unsplash.com/photo-1617191518005-0d4b5d9d5b72?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Chinese Money Plant",
    category: "Decorative Plants",
    price: 449,
    image: "https://images.unsplash.com/photo-1632207691146-0f3f7d1e2d6c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Croton",
    category: "Decorative Plants",
    price: 399,
    image: "https://images.unsplash.com/photo-1601986435680-3c2f2f3f7f3c?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Medicinal Plants",
    "Air Purifying Plants",
    "Decorative Plants",
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Paradise Nursery</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart ({cartCount})</Link>
        </div>
      </nav>

      <div className="product-page">
        <h1>Our Plants</h1>

        <p className="product-intro">
          Explore our collection of beautiful and healthy houseplants.
        </p>

        {categories.map((category) => (
          <section key={category} className="category-section">
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const isAdded = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div className="product-card" key={plant.id}>
                      <img
                        src={plant.image}
                        alt={plant.name}
                      />

                      <h3>{plant.name}</h3>

                      <p>₹{plant.price}</p>

                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;