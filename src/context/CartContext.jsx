import React, { useState, useContext, createContext } from 'react'
import Swal from 'sweetalert2';

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const auxCart = [...cart]
        const indexProduct = auxCart.findIndex(el => el.id === product.id);
        if (indexProduct < 0) {
            auxCart.push(product);
        } else {
            auxCart[indexProduct].quantity += product.quantity;
            auxCart[indexProduct].subtotal += product.price * product.quantity;
        }
        Swal.fire(`Agregaste ${product.name} (x${product.quantity}) a tu pedido`);
        setCart(auxCart);
    };

    const updateProduct = (id, op) => {
        const auxCart = [...cart];
        const indexProduct = auxCart.findIndex(el => el.id === id);

        switch (op) {
            case "-":
                if (auxCart[indexProduct].quantity > 1) {
                    auxCart[indexProduct].quantity -= 1;
                    auxCart[indexProduct].subtotal -= auxCart[indexProduct].price * 1;
                } else {
                    deleteProduct(id);
                };
                break;
            case "+":
                auxCart[indexProduct].quantity += 1;
                auxCart[indexProduct].subtotal += auxCart[indexProduct].price * 1;
                break;
            default:
                break;
        };
    };

    const deleteProduct = (id) => {
        Swal.fire({
            text: "¿Sacar producto de tu pedido?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Producto quitado correctamente.")
                const auxCart = [...cart].filter(el => el.id !== id);
                setCart(auxCart)
            }
        })
    }

    const checkout = () => {
        let message = "Hola! Quisiera hacerte el siguiente pedido:\n\n";

        cart.forEach(el => {
            message += `- *${el.quantity}x* ${el.name} - $${el.subtotal}` + "\n";
        })

        message += "\n\n" + `*TOTAL:* $${cart.reduce((acc, value) => acc + value.subtotal, 0)}` + "\nEspero tu respuesta";

        let finalMessage = message.split("\n").map(el => el.split(" ").join("%20")).join("%0A");

        let url = `https://api.whatsapp.com/send?phone=5493513456658&text=${finalMessage}`;
        window.open(url, "_blank");
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addProduct, checkout, updateProduct, deleteProduct }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;