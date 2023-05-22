import React from 'react'
import Style from "./cartoon.card.module.css"

const CartoonCard = ({ Title, Poster }) => {
  return (
    <div className={Style.cartoon_card}>
      <img src={Poster} alt={Title} />
      <div className={Style.cartoon_info}>
        <h3>{Title}</h3>
      </div>
    </div>
  )
}

export default CartoonCard