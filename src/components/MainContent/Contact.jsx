// src/components/Contact/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Feel free to reach out to us for inquiries,
        partnerships, or any other questions you may have.
      </p>
      <div className="contact-info">
        <p>Email: info@grasfam.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        {/* Add more contact information */}
      </div>
    </div>
  );
}

export default Contact;
