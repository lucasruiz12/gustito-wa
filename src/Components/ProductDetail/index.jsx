import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Modal, Button } from 'react-bootstrap';
import './style.css'

const ProductDetail = ({ show, setModal, currentQuantity, data }) => {

  const { addProduct } = useCartContext()

  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const { id, name, price, img } = data

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
  }

  return (
    <Modal show={show} onHide={() => setModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{currentQuantity}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h5>{name}</h5>
          <div>
            <p>Cantidad: </p>
            <Button onClick={() => handlerQuantity("-")}>
              -
            </Button>
            {quantityToAdd}
            <Button onClick={() => handlerQuantity("+")}>
              +
            </Button>
          </div>
          <div>
            Total: ${price * quantityToAdd}
          </div>
          <Button variant="primary" onClick={addToCart}>
            Agregar al pedido
          </Button>
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