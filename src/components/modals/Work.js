import React from 'react'
import pic01 from '../../images/antsane.png'
import PropTypes from 'prop-types'

const Work = (props) => {
  function handleClick() {
    props.onCloseArticle()
  }
  return (
    <article
      id="work"
      className={`${props.articleVisible === 'work' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Mes projets</h2>
      <a
        href="https://antsane.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="image main"
      >
        AntSane
        <img src={pic01} alt="" />
      </a>
      <button
        className="close"
        onKeyDown={handleClick}
        onClick={handleClick}
      ></button>
    </article>
  )
}

Work.propTypes = {
  timeout: PropTypes.bool,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
}

export default Work
