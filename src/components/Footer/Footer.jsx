import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container navbar-and-footer page-footer">
        <div>&copy; My Company 2023</div>
        <ul className="social-links">
          <li>
            <a href="#instagram">
              <FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#facebook">
              <FontAwesomeIcon icon={faFacebookSquare} className="fa-brands fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#youtube">
              <FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube" />
            </a>
          </li>
          <li>
            <a href="#twitter">
              <FontAwesomeIcon icon={faTwitter} className="fa-brands fa-twitter" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;