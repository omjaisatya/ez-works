import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domainRegex = /\.com$/i;

    if (!emailRegex.test(email)) {
      setMessage("Enter a valid email address.");
      return;
    }

    if (!domainRegex.test(email.split("@")[1])) {
      setMessage("Only valid domains are allowed.");
      return;
    }

    const response = await fetch("https://test.ezworks.ai/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.status === 422) {
      setMessage("Invalid email domain.");
    } else if (response.status === 200) {
      setMessage("Form Submitted!");
      setEmail("");
    } else {
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button type="submit" className="submit-btn">
          Contact Me
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Form;
