import React from 'react';
import '../styles/OrderModal.css';

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Place Your Order</h2>
        <form name="order-form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="order-form" />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="item">Item</label>
            <input type="text" id="item" name="item" required />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" min="1" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Special Instructions</label>
            <textarea id="message" name="message" rows="3"></textarea>
          </div>
          <div className="button-group">
            <button type="submit" className="submit-button">Place Order</button>
            <button type="button" className="close-button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;