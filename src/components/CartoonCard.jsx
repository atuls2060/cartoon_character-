import React from 'react'
import Style from "./cartoon.card.module.css"

const CartoonCard = ({ title, image }) => {
  return (
    <div className={Style.cartoon_card}>
      <img src={image} alt={title} />
      <div className={Style.cartoon_info}>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default CartoonCard