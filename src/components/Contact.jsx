import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_q6efzv9",
        "template_3dfzrof",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "GvKUT7eIbd7RnQD2L"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className={`container contact ${darkMode ? "dark-contact" : ""}`}
    >
      <div className="heading-wrapper heading-wrapper--light">
        <h2 className="heading--med">Contact Me</h2>
    </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label id="nameLabel" htmlFor="name" className="sr-text">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          aria-labelledby="nameLabel"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label id="emailLabel" htmlFor="email" className="sr-text">Email</label>
        <input
          type="email"
          id="email"
          aria-labelledby="emailLabel"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label id="messageLabel" htmlFor="message" className="sr-text">Message</label>
        <textarea
            id="message"
            name="message"
            aria-labelledby="messageLabel"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
