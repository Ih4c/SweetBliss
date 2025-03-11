import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOrderNow = () => {
    navigate('/menu');
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setMessage('');

    // Input validation
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/\S+@\S+\.\S+/.test(trimmedEmail)) {
      setMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Add the proxy URL here
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const response = await fetch(proxyUrl + process.env.REACT_APP_GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ email: trimmedEmail }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.text();
      if (result === 'Success') {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to submit. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Subscribe for Discount Section */}
      <section className="subscribe-section" data-aos="fade-up">
        <h2>Subscribe for Discount!</h2>
        <p>Get exclusive offers and updates straight to your inbox.</p>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* Moved the button below the input field */}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </section>
    </div>
  );
};

export default Home;