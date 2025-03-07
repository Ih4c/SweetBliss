import React, { useState } from 'react';
import OrderModal from '../components/OrderModal'; // Import the modal
import '../styles/Menu.css';

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Chocolate Lava Cake',
      description: 'Rich, gooey, and utterly decadent.',
      price: 'GH₵6.99',
      image: '/images/chocolate-lava-cake.jpg',
    },
    {
      id: 2,
      name: 'Salted Caramel Ice Cream',
      description: 'Creamy, sweet, and perfectly balanced.',
      price: 'GH₵4.99',
      image: '/images/salted-caramel-ice-cream.jpeg',
    },
    {
      id: 3,
      name: 'Strawberry Cheesecake',
      description: 'Creamy cheesecake with fresh strawberries.',
      price: 'GH₵7.99',
      image: '/images/strawberry-cheesecake.jpeg',
    },
    {
      id: 4,
      name: 'Vanilla Bean Ice Cream',
      description: 'Classic vanilla with real bean specks.',
      price: 'GH₵3.99',
      image: '/images/vanillabean-ice-cream.jpeg',
    },
    {
      id: 5,
      name: 'Baklava',
      description: 'Layer with nuts and drizzle with honey to make this wonderfully sticky Middle Eastern treat.',
      price: 'GH₵3.99',
      image: '/images/Baklava.jpeg',
    },
    {
      id: 6,
      name: 'Doughnut',
      description: 'doughnut or donuta small cake of sweetened dough.',
      price: 'GH₵3.99',
      image: '/images/dougnut.jpeg',
    },
    {
      id: 7,
      name: 'Cannoli',
      description: 'Experience the iconic Italian pastry, the cannoli, a true delight with its crispy shell and luscious creamy filling.',
      price: 'GH₵3.99',
      image: '/images/cannoli.jpeg',
    },
    {
      id: 8,
      name: 'Spring Rolls',
      description: 'rolled appetizers or dim sum commonly found in Chinese, Vietnamese and Southeast Asian cuisines.',
      price: 'GH₵3.99',
      image: '/images/spring.jpeg',
    },
  ];

  const handleOrderNow = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {products.map((product) => (
          <div key={product.id} className="menu-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">{product.price}</span>
            <button className="order-button" onClick={handleOrderNow}>
              Order Now
            </button>
          </div>
        ))}
      </div>

      {/* Order Modal */}
      <OrderModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Menu;