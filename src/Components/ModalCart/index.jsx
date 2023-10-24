import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button } from 'react-bootstrap';
import { faTrashCan, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ModalCart = ({ setModal }) => {
  const { cart, checkout, updateProduct, deleteProduct } = useCartContext();
  const [loading, setLoading] = useState(false);
  const modifyQuantity = (id, op) => {
    setLoading(true);
    updateProduct(id, op);
    setTimeout(() => {
      setLoading(false)
    }, 250);
  };

  return (
    <Modal show={true} onHide={() => setModal(false)}>
      <Modal.Header className="modal-header" closeButton>
        <p className="modal-header-title">Tu pedido</p>
      </Modal.Header>
      <Modal.Body>
        {
          loading ? <p>Cargando</p>
            :
            cart.length > 0 ?
              cart.map((el, idx) => {
                return (
                  <div key={idx} className="d-flex">
                    <div className="col">
                      <div className="product-name-container">
                        <p className="product-name">{el.name}</p>
                        <div className="justify-content-end">
                          <FontAwesomeIcon icon={faTrashCan} color="#71777e" onClick={() => deleteProduct(el.id)} />
                        </div>
                      </div>
                      <div className="product-name-container">
                        <p className="product-quantity">Cantidad: </p>
                        <FontAwesomeIcon onClick={() => modifyQuantity(el.id, "-")} icon={faMinus} color="#71777e" />
                        <p className="product-quantity">{el.quantity}</p>
                        <FontAwesomeIcon icon={faPlus} color="#71777e" onClick={() => modifyQuantity(el.id, "+")} />
                      </div>
                      <div className="price-container subtotal">
                        <p className="price">Precio: ${el.price}</p>
                        <p className="subtotal-price">Subtotal: ${el.subtotal}</p>
                      </div>
                    </div>
                  </div>
                )
              })
              :
              <p>Carrito vacio</p>
        }
        {
          cart.length > 0 &&
          <>
            <hr />
            <div className="price-container">
              <p className="total-price">Total: ${cart.reduce((acc, value) => acc + value.subtotal, 0)}</p>
              <Button onClick={checkout}>Finalizar pedido</Button>
            </div>
          </>
        }
      </Modal.Body>
    </Modal>
  );
};

export default ModalCart;