import { useEffect, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button } from 'react-bootstrap';
import { faTrashCan, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ModalCart = ({ setModal }) => {

  const { cart, checkout, varieties, updateProduct, deleteProduct, totalShop } = useCartContext();

  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(totalShop(cart.reduce((acc, value) => acc + value.quantity, 0)));

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

  useEffect(() => {
    setTotalPrice(totalShop(cart.reduce((acc, value) => acc + value.quantity, 0)));
  }, [loading]);

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
                        <p className="product-name">Empanadas de {varieties.find(element => element.type === el.type).name.toUpperCase()}</p>
                        <div className="justify-content-end">
                          <FontAwesomeIcon icon={faTrashCan} color="#71777e" onClick={() => modifyQuantity(el.type, "delete")} />
                        </div>
                      </div>
                      <div className="product-name-container">
                        <p className="product-quantity">Cantidad: </p>
                        <FontAwesomeIcon onClick={() => modifyQuantity(el.type, "-")} icon={faMinus} color="#71777e" />
                        <p className="product-quantity">{el.quantity}</p>
                        <FontAwesomeIcon icon={faPlus} color="#71777e" onClick={() => modifyQuantity(el.type, "+")} />
                      </div>
                      <div className="price-container subtotal">
                        <div>
                        </div>
                      </div>
                    </div>
                    <div className="col justify-content-end">
                      <Button onClick={() => modifyQuantity(el.type, "delete")}>X</Button>
                    </div>
                  </div>
                )
              })
              :
              <p>Pedido vacío (por ahora)</p>
        }
        {
          cart.length > 0 &&
          <>
            <hr />
            <p className="subtotal-price">Total: {cart.reduce((acc, value) => acc + value.quantity, 0)} empanadas</p>
            <p className="price">Precio final: ${totalPrice}</p>
            <Button onClick={finishShop}>Finalizar pedido</Button>
          </>
        }
      </Modal.Body>
    </Modal>
  )
}

export default ModalCart