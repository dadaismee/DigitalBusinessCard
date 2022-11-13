import React from 'react'
import "./Footer.css"
import { behance, facebook, instagram, github } from "../../assets/index"

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__image-container'>
        <a href="https://www.behance.net/valeriishevchenko" target="_blank">
          <img className="footer__img" src={behance} alt="behance" />
        </a>
        <a href="https://github.com/dadaismee" target="_blank">
          <img className="footer__img" src={github} alt="github" />
        </a>
        <a href="https://www.facebook.com/user1029384756/"target="_blank">
          <img className="footer__img" src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/dada1sme" target="_blank">
          <img className="footer__img" src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  )
}

export default Footer