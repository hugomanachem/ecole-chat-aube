import { useState } from "react";
import facebook_logo_yellow from "../assets/footer/facebook_logo_yellow.png";
import home_logo_yellow from "../assets/footer/home_logo_yellow.png";
import phone_logo_yellow from "../assets/footer/phone_logo_yellow.png";
import email_logo_yellow from "../assets/footer/email_logo_yellow.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Contact() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <section id="contact-section" className="primary-bg-color">
        <Navbar bg_color="secondary" />
        <h1 id="contact-main-title">Contactez-nous ici !</h1>
        <div id="contact-grid-container">
          <a className="tertiary-color">
            <img className="footer-links-logo" src={facebook_logo_yellow} />
            Notre Facebook
          </a>

          <a className="tertiary-color">
            <img className="footer-links-logo" src={phone_logo_yellow} />
            09.80.38.44.40 - 06.28.84.25.65
          </a>
          <a className="tertiary-color">
            <img className="footer-links-logo" src={home_logo_yellow} />
            B.P. 80 176 - 10605 La Chapelle Saint Luc Cedex
          </a>
          <a className="tertiary-color">
            <img className="footer-links-logo" src={email_logo_yellow} />
            contact@ecoleduchatdelaube.com
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.056205765254!2d4.1197616119783325!3d48.282534540938585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee9ec2482dbbff%3A0xb34db15dae965915!2sLa%20Soci%C3%A9t%C3%A9%20Protectrice%20des%20Animaux%20(SPA)%20-%20Refuge%20de%20Saint%20Parres%20aux%20Tertres!5e0!3m2!1sfr!2sfr!4v1709313349413!5m2!1sfr!2sfr"
            width="500"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <form id="contact-form">
            <h4 id="no-text-transform">Ou remplissez ce formulaire :</h4>
            <div>
              <label>Votre prénom</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="Votre prénom"
                required
              />
            </div>

            <div>
              <label>Votre nom</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Votre nom"
                required
              />
            </div>

            <div>
              <label>Votre message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Votre message"
                required
              />
            </div>

            <button className="secondary-bg-color pointer-on-hover">
              Envoyer
            </button>
          </form>
        </div>
      </section>
      <Footer bg_color="secondary-bg-color" icons_color="white" />
    </>
  );
}

export default Contact;
