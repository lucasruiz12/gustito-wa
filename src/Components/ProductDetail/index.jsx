import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const ProductDetail = ({ show, setModal, currentQuantity, data }) => {
  const { addProduct, varieties } = useCartContext();
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const { quantityToShop, img, type } = data;

  const handlerQuantity = (type) => {
    switch (type) {
      case "-":
        quantityToAdd > 1 && setQuantityToAdd(quantityToAdd - 1)
        break;
      case "+":
        setQuantityToAdd(quantityToAdd + 1)
        break;
      default:
        break;
    }
  };

  const addToCart = () => {
    let product = {
      img,
      quantity: quantityToAdd * quantityToShop,
      type
    };

    addProduct(product);
    setModal(false);
  };

  return (
    <Modal show={show} onHide={() => setModal(false)}>
      <Modal.Header closeButton>
        <p className="modal-header-title">{currentQuantity}</p>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className='container-product-name-cart'>
          <img src={img} className="product-img-cart" />
          <p className="product-name">{varieties.find(el => el.type === type).name.toUpperCase()}</p>
          </div>
          <div className="product-quantity-container">
            <div>
              <p className="product-quantity">Cantidad: </p>
            </div>
            <div className="quantity-content">
              <FontAwesomeIcon className="icon-padding" onClick={() => handlerQuantity("-")} icon={faMinus} color="#71777e" />
              <p className="product-quantity">{quantityToAdd}</p>
              <FontAwesomeIcon className="icon-padding" icon={faPlus} color="#71777e" onClick={() => handlerQuantity("+")} />
            </div>
          </div>
          <div className="price-container subtotal">
            <div>
              <p className="total-price">
                Total a agregar: {quantityToShop * quantityToAdd} empanadas
              </p>
            </div>
            <Button className="button-text" variant="primary" onClick={addToCart}>
              Agregar al pedido
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductDetail;
