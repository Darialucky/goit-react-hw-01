// src/components/Product.jsx

import PropTypes from "prop-types";

const Product = ({ name, imgUrl, price }) => (
  <div>
    <img src={imgUrl} alt={name} width="480" />
    <h2>{name}</h2>
    <p>Price: {price} credits</p>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;
