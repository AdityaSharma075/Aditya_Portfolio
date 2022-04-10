import { useState, useRef } from "react";
import "./Contact.scss";
import { images } from "../../constants";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm("gmail", "template_7a5s7ed", form.current, "E9v7c5a_JGYKh4Rxq")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={images.shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
