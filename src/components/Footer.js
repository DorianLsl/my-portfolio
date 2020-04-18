import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <ul className="icons">
      <li>
        <b className="label">POUR ME CONTACTER </b>
        <span className="icon fa-arrow-right" />
      </li>
      <li>
        <a href="mailto:dorian.lansel@viacesi.fr" className="icon fa-envelope">
          <span className="label">dorian.lansel@viacesi.fr</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/dorian-lansel"
          className="icon fa-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/dorianlsl"
          className="icon fa-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
    <p className="copyright">
      &copy; Dorian Lansel. Design: <a href="https://html5up.net">HTML5 UP</a>.
      Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
