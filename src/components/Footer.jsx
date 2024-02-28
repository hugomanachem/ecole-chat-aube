import footer_logo from '../assets/footer/footer_logo.png';

function Footer (props) {

    return (
        <footer className="primary-bg-color">
            <div className="footer-content">
                <img src={footer_logo}/>
                <div className="footer-links">
                    <a className='tertiary-color'><img className='footer-links-logo' src={`src/assets/footer/facebook_logo_${props.icons_color}.png`}/>Notre Facebook</a>
                    <a className='tertiary-color'><img className='footer-links-logo' src={`src/assets/footer/home_logo_${props.icons_color}.png`}/>B.P. 80 176 - 10605 La Chapelle Saint Luc Cedex</a>
                    <a className='tertiary-color'><img className='footer-links-logo' src={`src/assets/footer/phone_logo_${props.icons_color}.png`}/>09.80.38.44.40 - 06.28.84.25.65</a>
                    <a className='tertiary-color'><img className='footer-links-logo' src={`src/assets/footer/email_logo_${props.icons_color}.png`}/>contact@ecoleduchatdelaube.com</a>
                </div>
            </div>
        </footer>
        
    );
}

export default Footer;