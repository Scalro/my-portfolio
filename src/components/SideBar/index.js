import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/download.png'
import LogoSub from '../../assets/images/download (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const SideBar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSub} alt="logos" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contacts"
      >
        <FontAwesomeIcon icon={faPhone} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/caleb-rotich-9118ba1b4"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/caleb.ozil.73?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/RotichKibet14?t=BzZ4_92pRA1E8parxhmuUQ&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Scalro" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCWCex7RhK1QoXattIPUKYwg"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)
export default SideBar
