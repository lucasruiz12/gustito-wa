import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CardProduct = ({ id, name, quantityToShop, backgroundImg, img, type, setModal, setData, stock = true, active }) => {
  const handlerData = () => {
    setModal && setModal(true);
    setData({ quantityToShop, img, type, stock });
  };
  return (
    <button className={backgroundImg ? "card-product" : "card-product-without-backgroundImg"} disabled={!stock} style={backgroundImg && {backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),url(${backgroundImg})`}} onClick={handlerData}>
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