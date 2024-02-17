
import Vanlogo from '../assets/vanlife.svg';
import './Footer.css'; 

const Footer = () => {
  const linksData = [
    { title: 'About Us', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Investor Relations', href: '/investors' },
    { title: 'Amazon Business', href: '/business' },
    { title: 'Whole Foods Market', href: '/wholefoods' },
    { title: 'Amazon Payment Products', href: '/pay' },
    { title: 'Sell on Amazon', href: '/sell' },
  ];

  const communityData = [
    { title: 'Amazon Music', href: '/music' },
    { title: 'Kindle Direct Publishing', href: '/kdp' },
    { title: 'Amazon Web Services (AWS)', href: '/aws' },
    { title: 'Audible', href: '/audible' },
    { title: 'Alexa', href: '/alexa' },
    { title: 'Fire TV', href: '/firetv' },
    { title: 'Ring', href: '/ring' },
  ];

  const helpData = [
    { title: 'Your Account', href: '/your-account' },
    { title: 'Orders & Returns', href: '/orders' },
    { title: 'Payment Options', href: '/payment-options' },
    { title: 'Shipping Rates & Policies', href: '/shipping' },
    { title: 'Returns & Replacements', href: '/returns' },
    { title: 'Manage Your Content and Devices', href: '/content-devices' },
    { title: 'Customer Service', href: '/help' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-section">
          <h4>Get to Know Us</h4>
          <ul>
            {linksData.map((link) => (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-top-section">
          <h4>Make Money with Us</h4>
          <ul>
            {communityData.map((link) => (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-top-section">
          <h4>Help & Support</h4>
          <ul>
            {helpData.map((link) => (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <a href="/">
            <img src= {Vanlogo} alt="Vanlife logo" />
          </a>
        </div>
        <div className="footer-bottom-right">
          <p>
            &copy; 1997-{new Date().getFullYear()} Vanlife.com, Inc. or its
            affiliates
          </p>
          <ul>
            <li>
              <a href="/conditions">Conditions of Use</a>
            </li>
            <li>
              <a href="/privacy">Privacy Notice</a>
            </li>
            <li>
              <a href="/interest-based-ads">Interest-Based Ads</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
