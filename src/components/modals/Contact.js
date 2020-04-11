import React from 'react'
import PropTypes from 'prop-types'

const Contact = (props) => {
  function handleClick() {
    props.onCloseArticle()
  }
  return (
    <article
      id="contact"
      className={`${props.articleVisible === 'contact' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Contact</h2>
      <form method="post" action="#">
        <div className="field half first">
          <label htmlFor="name">Nom - Prénom</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4"></textarea>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Envoyer" className="special" />
          </li>
          <li>
            <input type="reset" value="Annuler" />
          </li>
        </ul>
      </form>
      <ul className="icons">
        <li>
          <a
            href="mailto:dorian.lansel@viacesi.fr"
            className="icon fa-envelope"
          >
            <span className="label">dorian.lansel@viacesi.fr</span>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/dorianlsl" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
      <button
        className="close"
        onKeyDown={handleClick}
        onClick={handleClick}
      ></button>
    </article>
  )
}

Contact.propTypes = {
  timeout: PropTypes.bool,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
}

export default Contact
