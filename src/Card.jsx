import React from 'react'

const Card = ({title, image, price}) => (
  <>
    <h1>{title}</h1>
    <img src={image} width="250px" alt=""/><br/>
    <button>{`${price} USD`}</button>
  </>
)

export default Card