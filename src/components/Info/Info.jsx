import React from 'react'
import { face, telegram, portfolio } from "../../assets/index"
import "./Info.css"
import "../../index.css"

const Info = () => {
  return (
    <div className='info__container'>
      <div className="info__img-container">
        <img src={face} alt="Portrait" /> 
      </div>
      <div className='info__main-content'>
        <h1>Valerii Shevchenko</h1>
        <h4>Digital designer / Web-developer</h4>
        <div className='info__buttons-container'>
         <a href='https://t.me/emsiadad'>
          <button className='info__buttons-container_button info__buttons-container_button-left'>
              <img className='info__buttons-container_button-img' src={telegram}/>
              Telegram
            </button>
          </a>
          <a href='https://www.notion.so/vshevchenko/Valerii-Shevchenko-64255db01ac742328701e137af3b3f51' target="_blank">
            <button className='info__buttons-container_button info__buttons-container_button-right'>
            <img className='info__buttons-container_button-img' src={portfolio} />
            Portfolio
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Info