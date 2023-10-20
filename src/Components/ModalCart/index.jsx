import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Modal, Button } from 'react-bootstrap';
import './style.css'

const ModalCart = ({ setModal }) => {

  const { cart, checkout, updateProduct, deleteProduct } = useCartContext();

  const [loading, setLoading] = useState(false)

  const modifyQuantity = (id, op) => {
    setLoading(true);
    updateProduct(id, op);
    setTimeout(() => {
      setLoading(false)
    }, 250);
  }

  return (
    <Modal show={true} onHide={() => setModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Tu pedido</Modal.Title>
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
                      <h4>{el.name}</h4>
                      <div>
                        <p>Cantidad: </p>
                        <Button onClick={() => modifyQuantity(el.id, "-")}>
                          -
                        </Button>
                        {el.quantity}
                        <Button onClick={() => modifyQuantity(el.id, "+")}>
                          +
                        </Button>
                      </div>


                      <p>Precio: ${el.price}</p>
                      <p>Subtotal: ${el.subtotal}</p>
                    </div>
                    <div className="col justify-content-end">
                      <Button onClick={() => deleteProduct(el.id)}>X</Button>
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
            <p>Total: ${cart.reduce((acc, value) => acc + value.subtotal, 0)}</p>
            <Button onClick={checkout}>Finalizar pedido</Button>
          </>
        }
      </Modal.Body>
    </Modal>
  )
}

export default ModalCart