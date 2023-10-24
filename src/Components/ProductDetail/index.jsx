import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const ProductDetail = ({ show, setModal, currentQuantity, data }) => {
  const { addProduct } = useCartContext();
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const { id, name, price, img } = data;

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
      id,
      name,
      price,
      img,
      quantity: quantityToAdd,
      subtotal: price * quantityToAdd,
    }

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
          <p className="product-name">{name}</p>
          <div className="product-name-container">
            <p className="product-quantity">Cantidad: </p>
            <FontAwesomeIcon onClick={() => handlerQuantity("-")} icon={faMinus} color="#71777e" />
            <p className="product-quantity">{quantityToAdd}</p>
            <FontAwesomeIcon icon={faPlus} color="#71777e" onClick={() => handlerQuantity("+")} />
          </div>
          <div className="price-container subtotal">
            <div>
              <p className="total-price">
                Total: ${price * quantityToAdd}
              </p>
            </div>
            <Button className="button-custom" variant="primary" onClick={addToCart}>
              Agregar al pedido
            </Button>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal(false)}>
          Cerrar
        </Button>
      </Modal.Footer> */}
    </Modal>
  )
}

export default ProductDetail