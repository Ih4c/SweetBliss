import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear errors on input
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.inquiry) newErrors.inquiry = 'Inquiry type is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Netlify will handle the form submission
    setSubmitMessage('Message sent successfully!');
    setFormData({ name: '', email: '', inquiry: '', message: '' }); // Clear form
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form
            name="contact-form"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="inquiry">Inquiry Type</label>
              <select
                id="inquiry"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="general">General Inquiry</option>
                <option value="catering">Catering</option>
                <option value="events">Events</option>
                <option value="feedback">Feedback</option>
              </select>
              {errors.inquiry && <span className="error">{errors.inquiry}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        </div>

        {/* Google Map */}
        <div className="map">
          <h2>Our Location</h2>
          <iframe
            title="Sweet Bliss Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d-0.200670684734245!3d5.603295795966471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTEuOCJOIDDCsDEyJzAxLjgiVw!5e0!3m2!1sen!2sgh!4v1622549400000!5m2!1sen!2sgh"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Phone: +233 27 356 4989</p>
        <p>Email: info@sweetbliss.com</p>
        <p>Address: 123 Sweet Street, Accra, Ghana</p>
        <p>Business Hours: Mon-Sat, 8:00 AM - 8:00 PM</p>
      </div>
    </div>
  );
};

export default Contact;