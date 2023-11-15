import React, { useState, useContext, createContext } from 'react';
import Swal from 'sweetalert2';

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = (props) => {
	const [cart, setCart] = useState([]);
	const varieties = [
		{
			type: 1,
			name: "Carne cortada a cuchillo con llajua",
			stock: true
		},
		{
			type: 2,
			name: "Pollo con llajua",
			stock: true
		},
		{
			type: 3,
			name: "Jamon y queso",
			stock: true
		},
		{
			type: 4,
			name: "Con mucho queso",
			stock: true
		},
		{
			type: 5,
			name: "Espinaca y queso azul",
			stock: false
		},
	];

	const addProduct = (product) => {
		const auxCart = [...cart]
		const indexProduct = auxCart.findIndex(el => el.type === product.type);
		if (indexProduct < 0) {
			auxCart.push(product);
		} else {
			auxCart[indexProduct].quantity += product.quantity;
		}
		Swal.fire(`Agregaste empanadas de ${varieties.find(el => el.type === product.type).name} (x${product.quantity}) a tu pedido`);
		setCart(auxCart);
	};

	const updateProduct = (id, op) => {
		const auxCart = [...cart];
		const indexProduct = auxCart.findIndex(el => el.type === id);

		switch (op) {
			case "-":
				if (auxCart[indexProduct].quantity > 1) {
					auxCart[indexProduct].quantity -= 1;
				} else {
					deleteProduct(id);
				};
				break;
			case "+":
				auxCart[indexProduct].quantity += 1;
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
				Swal.fire("Producto quitado correctamente.");
				const auxCart = [...cart].filter(el => el.type !== id);
				setCart(auxCart);
			}
		});
	};

	const checkout = () => {
		let message = "Hola! Quisiera hacerte el siguiente pedido:\n\n";

		cart.forEach(el => {
			message += `- *${el.quantity}x* empanadas de ${varieties.find(element => element.type === el.type).name}` + "\n";
		});

		let finalPrice = totalShop(cart.reduce((acc, value) => acc + value.quantity, 0))

		message += "\n\n" + `*TOTAL:* $${finalPrice}` + "\nEspero tu respuesta";

		let finalMessage = message.split("\n").map(el => el.split(" ").join("%20")).join("%0A");

		let url = `https://api.whatsapp.com/send?phone=5493513456658&text=${finalMessage}`;

		Swal.fire({
			title: "¿Finalizar pedido?",
			text: "Serás redirigido a nuestro WhatsApp",
			icon: 'info',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí',
			cancelButtonText: 'No'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Muchas gracias por tu compra!",
					timer: 1100
				})
				setTimeout(() => {
					window.open(url, "_blank");
					setCart([]);
				}, 1000);
			}
		});
	};

	const totalShop = (quantity) => {
		let rest = quantity;
		const dozen = Math.floor(rest / 12);
		rest %= 12;
		const halfDozen = Math.floor(rest / 6);
		const unit = rest % 6;

		return (dozen * 4900 + halfDozen * 2600 + unit * 460);
	};

	return (
		<CartContext.Provider value={{ cart, setCart, varieties, addProduct, checkout, updateProduct, deleteProduct, totalShop }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
