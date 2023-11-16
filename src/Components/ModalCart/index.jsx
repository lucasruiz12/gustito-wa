import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button } from 'react-bootstrap';
import { faTrashCan, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ModalCart = ({ setModal }) => {
  const { cart, checkout, varieties, updateProduct, deleteProduct, totalShop } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(totalShop(cart.reduce((acc, value) => acc + value.quantity, 0)));

  useEffect(() => {
    setTotalPrice(totalShop(cart.reduce((acc, value) => acc + value.quantity, 0)));
  }, [loading]);

  const modifyQuantity = (id, op) => {
    setLoading(true);
    if (op === "delete") {
      deleteProduct(id);
    } else {
      updateProduct(id, op);
    }
    setTimeout(() => {
      setLoading(false)
    }, 250);
  };

  const finishShop = () => {
    checkout();
    setModal(false);
  };

  return (
    <Modal show={true} onHide={() => setModal(false)}>
      <Modal.Header className="modal-header" closeButton>
        <p className="modal-header-title">Tu pedido</p>
      </Modal.Header>
      <Modal.Body>
        {
          loading ? <div class="spinner-border text-primary" role="status" />
            :
            cart.length > 0 ?
              cart.map((el, idx) => {
                return (
                  <>
                  <div key={idx} className="d-flex">
                    <div className="col">
                      <div className="container-product-name-cart">
                        <img src={el.img} className="product-img-cart" />
                        <p className="product-name">{varieties.find(element => element.type === el.type).name.toUpperCase()}</p>
                        <div className="justify-content-end">
                          <FontAwesomeIcon icon={faTrashCan} color="#71777e" onClick={() => modifyQuantity(el.type, "delete")} />
                        </div>
                      </div>
                      <div className="product-quantity-container">
                        <div>
                          <p className="product-quantity">Cantidad: </p>
                        </div>
                        <div className="quantity-content">
                          <FontAwesomeIcon className="icon-padding" onClick={() => modifyQuantity(el.type, "-")} icon={faMinus} color="#71777e" />
                          <p className="product-quantity">{el.quantity}</p>
                          <FontAwesomeIcon className="icon-padding" icon={faPlus} color="#71777e" onClick={() => modifyQuantity(el.type, "+")} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="solid"></hr>
                  </>
                )
              })
              :
              <p>Carrito vacio</p>
        }
        {
          cart.length > 0 &&
          <div className='price-container'>
            <p className="subtotal-price">Total: {cart.reduce((acc, value) => acc + value.quantity, 0)} empanadas</p>
            <p className="price total-price ">Precio final: ${totalPrice}</p>
            <Button className="button-text" onClick={finishShop}>Finalizar pedido</Button>
          </div>
        }
      </Modal.Body>
    </Modal>
  );
};

export default ModalCart;