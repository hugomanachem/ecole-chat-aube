import footer_logo from "../assets/footer/footer_logo.png";
import facebook_logo_white from "../assets/footer/facebook_logo_white.png";
import home_logo_white from "../assets/footer/home_logo_white.png";
import phone_logo_white from "../assets/footer/phone_logo_white.png";
import email_logo_white from "../assets/footer/email_logo_white.png";
import facebook_logo_yellow from "../assets/footer/facebook_logo_yellow.png";
import home_logo_yellow from "../assets/footer/home_logo_yellow.png";
import phone_logo_yellow from "../assets/footer/phone_logo_yellow.png";
import email_logo_yellow from "../assets/footer/email_logo_yellow.png";

function Footer(props) {
  return (
    <footer className={props.bg_color}>
      <div className="footer-content">
        <img src={footer_logo} />
        {props.bg_color && props.bg_color == "primary-bg-color" ? (
          <div className="footer-links">
            <div className="footer-links-left">
              <a className="tertiary-color">
                <img className="footer-links-logo" src={facebook_logo_yellow} />
                Notre Facebook
              </a>
              <a className="tertiary-color">
                <img className="footer-links-logo" src={phone_logo_yellow} />
                09.80.38.44.40 - 06.28.84.25.65
              </a>
            </div>
            <div className="footer-links-right">
              <a className="tertiary-color">
                <img className="footer-links-logo" src={home_logo_yellow} />
                B.P. 80 176 - 10605 La Chapelle Saint Luc Cedex
              </a>
              <a className="tertiary-color">
                <img className="footer-links-logo" src={email_logo_yellow} />
                contact@ecoleduchatdelaube.com
              </a>
            </div>
          </div>
        ) : (
          <div className="footer-links">
            <div className="footer-links-left">
              <a className="tertiary-color">
                <img className="footer-links-logo" src={facebook_logo_white} />
                Notre Facebook
              </a>
              <a className="tertiary-color">
                <img className="footer-links-logo" src={phone_logo_white} />
                09.80.38.44.40 - 06.28.84.25.65
              </a>
            </div>
            <div className="footer-links-right">
              <a className="tertiary-color">
                <img className="footer-links-logo" src={home_logo_white} />
                B.P. 80 176 - 10605 La Chapelle Saint Luc Cedex
              </a>
              <a className="tertiary-color">
                <img className="footer-links-logo" src={email_logo_white} />
                contact@ecoleduchatdelaube.com
              </a>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
