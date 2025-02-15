
export default function Footer() {
 return (
    <footer className="footer">
      <div className="footer-logo">
      
  <img src="/src/assets/download.svg" alt="Footer Logo" />

      </div>
      <p className="footer-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consectetur
        amet culpa cum itaque neque.
      </p>
      <div className="footer-nav">
        <a href="#about">About</a>
        <a href="#careers">Careers</a>
        <a href="#history">History</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
      </div>
      <div className="footer-social">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
    </footer>
  );
}
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"; 

