/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-irregular-whitespace */
// src/components/Product.jsx

import PropTypes from "prop-types";

const Product = ({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) => (
  <div>
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <img src={imgUrl} alt={name} width="480" />
    // eslint-disable-next-line no-irregular-whitespace
    <h2>{name}</h2>    <p>Price: {price} credits</p> {" "}
  </div>
);

// Опис типів пропсів компонента
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

import { HiUser } from "react-icons/hi";

const UserMenu = ({ name }) => {
  return (
    <div>
      <p>
        <HiUser className="my-icon" size="24" /> {name}
      </p>
    </div>
  );
};
console.log(UserMenu);
export default Product;
