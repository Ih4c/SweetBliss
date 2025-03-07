import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOrderNow = () => {
    navigate('/menu'); // Redirect to the Menu page
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <div className="hero-content">
          <h1>Indulge in Sweet Moments!</h1>
          <p>Discover our delicious pastries and artisanal ice creams.</p>
          <button className="cta-button" onClick={handleOrderNow}>Order Now</button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products" data-aos="fade-up">
        <h2>Our Bestsellers</h2>
        <div className="product-grid">
          <div className="product-card" data-aos="fade-right">
            <img src="/images/chocolate-lava-cake.jpg" alt="Chocolate Lava Cake" />
            <h3>Chocolate Lava Cake</h3>
            <p>Rich, gooey, and utterly decadent.</p>
          </div>
          <div className="product-card" data-aos="fade-left">
            <img src="/images/salted-caramel-ice-cream.jpeg" alt="Salted Caramel Ice Cream" />
            <h3>Salted Caramel Ice Cream</h3>
            <p>Creamy, sweet, and perfectly balanced.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;