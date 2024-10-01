import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <h3><i className="fas fa-mountain"></i> UI Portfolio</h3>
        </div>
        <div className="footer__contact">
          <p>
            <i className="fas fa-phone"></i> +12 345 678 900
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@example.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 208 Avenue Street, UK - 62617.
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2024 UI Portfolio. All Rights Reserved | WordPress Theme by <a href="https://w3layouts.com" target="_blank" rel="noopener noreferrer">W3Layouts</a>.</p>
        <div className="footer__social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-behance"></i></a>
          <a href="#"><i className="fab fa-dribbble"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
