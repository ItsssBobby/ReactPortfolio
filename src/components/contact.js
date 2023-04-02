import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
      validateEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formValid) {
      try {
        const response = await fetch('/api/send-email/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        });
  
        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert('Error sending email. Please try again.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again.');
      }
    } else {
      alert('Please fill out all required fields.');
    }
  };
  

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    if (name === "name") {
      setFormValid(
        name.trim() !== "" && email.trim() !== "" && message.trim() !== ""
      );
    } else if (name === "email") {
      setFormValid(
        name.trim() !== "" &&
          email.trim() !== "" &&
          message.trim() !== "" &&
          emailValid
      );
    } else if (name === "message") {
      setFormValid(
        name.trim() !== "" && email.trim() !== "" && message.trim() !== ""
      );
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        />
        {!emailValid && (
          <span className="error-message">
            Please enter a valid email address.
          </span>
        )}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
