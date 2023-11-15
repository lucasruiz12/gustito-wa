import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CardProduct = ({ id, name, quantityToShop, backgroundImg, img, type, setModal, setData, stock, active }) => {
  const handlerData = () => {
    setModal && setModal(true);
    setData({ quantityToShop, img, type });
  };
  return (
    <button className={backgroundImg ? "card-product" : "card-product-without-backgroundImg"} style={backgroundImg && {backgroundImage: `url(${backgroundImg})`}} onClick={handlerData}>
      {img && <img className="card-image" src={img} />}
      {
        !setModal ?
          <Link to={`/category/${id}`} className="link-dark link-underline-opacity-0">
            <p className={backgroundImg? "card-backgroundImg-title" : "card-customized-title"}>{name}</p>
          </Link>
          :
          <p className="card-customized-title">{name}</p>
      }
    </button>
  );
};

export default CardProduct;