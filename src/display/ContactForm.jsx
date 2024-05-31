//ContactForm

import React from "react";
import "./display.scss";

const ContactForm = () => {
  return (
    <div className="contact-frames">
      <div className="frame chat-live">
        <h3>Chat Live</h3>
        <p>Connect with our support team instantly!</p>
        <p>Zalo</p>
        <p>Facebook</p>
        <button className="btn-contact">Chat Now</button>
      </div>
      <div className="frame call-us">
        <h3>Call Us</h3>
        <p>Telephone number 1 : 82xxxx567</p>
        <p>Telephone number 2 : 03xxxx692</p>

        <button className="btn-contact">Call Now</button>
      </div>
      <div className="frame ask-question">
        <h3>Ask a Question</h3>
        <p>Comment</p>

        <p>Submit your inquiry or request here.</p>
        <button className="btn-contact">Ask</button>
      </div>
    </div>
  );
};

export default ContactForm;
