import React from 'react'
import PropTypes from 'prop-types'

const About = (props) => {
  function handleClick() {
    props.onCloseArticle()
  }
  return (
    <article
      id="about"
      className={`${props.articleVisible === 'about' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">A propos de moi</h2>
      <p>
        Moi c'est Dorian et j'étudie actuellement pour un Master en ingénierie
        informatique au CESI d'Arras (j'en suis à ma troisième année).
      </p>
      <p>
        Mis à part cela, je suis surtout un vrai passionné de la programmation
        et plus particulièrement des technologies Web !
      </p>
      <p>
        Ayant commencé la programmation il y a plus de <b>cinq</b> ans, je
        m'amuse aujourd'hui à monter des projets indépendants pour vivre de
        nouvelles expériences ! Si l'on devait reprendre le jargon du dev', mes
        compétences me permettent d'être <b>fullstack</b>.
      </p>

      <button
        className="close"
        onKeyDown={handleClick}
        onClick={handleClick}
      ></button>
    </article>
  )
}

About.propTypes = {
  timeout: PropTypes.bool,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
}
export default About
