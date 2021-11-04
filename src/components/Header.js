import PropTypes from 'prop-types'
import React from 'react'
import profilePicture from '../images/profile.jpeg'

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    {/* <div className="logo">
      <span className="icon fa-diamond"></span>
    </div> */}
    <img className="logo" src={profilePicture}></img>
    <div className="content">
      <div className="inner">
        <h1>Dorian Lansel</h1>
        <p>
          Etudiant en école d'ingénieurs en informatique, développeur et surtout
          passioné par les technologies Web !
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Qui suis-je ?
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
