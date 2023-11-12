import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../context/CartContext';
import ModalCart from '../ModalCart';
import './style.css';
import { GustitoLogo } from '../../assets';

function Navbar() {
  const { cart } = useCartContext();
  const [modalCart, setModalCart] = useState(false);
  const handlerCart = () => {
    setModalCart(true);
  };

  return (
    <>
      {modalCart && <ModalCart setModal={setModalCart} />}
      <nav className="navbar navbar-dark custom-navbar row d-flex justify-content-between">
        <div className="col-10">
          <Link to="/" >
            <img src={GustitoLogo} style={{ height: "50px" }} />
          </Link>
        </div>
        <div className="cart-icon col-1 mr-3 d-flex justify-content-end" onClick={handlerCart}>
          {cart.length}
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;