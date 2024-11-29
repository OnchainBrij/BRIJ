import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./contactForm.css";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  const [notification, setNotification] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "5dec197b-dca9-4df5-99cc-c5cab06ea2ad",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log("Form submitted successfully:", result);
      setNotification("Your message has been sent successfully!");
      e.target.reset(); // Reset form fields after successful submission

      // Remove notification after 30 seconds
      setTimeout(() => {
        setNotification("");
      }, 30000); // 30000 milliseconds = 30 seconds
    } else {
      console.error("Form submission failed:", result);
      setNotification("Failed to send the message. Please try again.");

      // Remove notification after 30 seconds
      setTimeout(() => {
        setNotification("");
      }, 30000); // 30000 milliseconds = 30 seconds
    }
  }

  return (
    <div className="contact-form-wrapper" id="contact">
      <div className="leftside" data-aos="fade-right">
        <h1>Ready to transform your venture?</h1>
        <p>
          {"Let's"} work together to achieve your digital
          <br /> goals.
        </p>
      </div>

      <div className="rightside" data-aos="fade-left">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            data-aos="zoom-in"
            style={{ padding: "10px 14px" }}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            data-aos="zoom-in"
            style={{ padding: "10px 14px" }}
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="4"
            placeholder="Your message"
            required
            data-aos="zoom-in"
            style={{ padding: "10px 14px" }}
          ></textarea>
          <button type="submit" data-aos="flip-up" style={{ padding: "10px 14px" }}>
            Contact Us Now{" "}
            <span>
              <FaArrowRight />{" "}
            </span>
          </button>
        </form>

        {notification && (
          <div className="notification text-center text-[green]" data-aos="fade-up">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
