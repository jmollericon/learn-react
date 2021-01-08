import React from 'react'
import PropTypes from 'prop-types'

const Card = ({title, image, price}) => (
  <>
    <h1>{title}</h1>
    <img src={image} width="250px" alt=""/><br/>
    <button>{`${price} USD`}</button>
  </>
)
Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number
}
Card.defaultProps = {
  title: "No se encontró el título",
  image: "https://www.degustapanama.com/img/pix/restaurante.fonda-lo-que-hay_1_foto-r-0.jpg",
  price: 0
}
export default Card