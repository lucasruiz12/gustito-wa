import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { EmpanadaCarne, EmpanadaEspinacaQueso, EmpanadaJamonYQueso, EmpanadaPollo, EmpanadaQueso } from "../../assets";
import CardProduct from '../../Components/CardProduct';
import ProductDetail from '../../Components/ProductDetail';

import './style.css'

const CategoryDetail = () => {

  const [showAdd, setShowAdd] = useState(false);
  const [dataToModal, setDataToModal] = useState({});

  let { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Salteña de carne cortada a cuchillo con llajua (x12)",
      quantityToShop: 12,
      img: EmpanadaCarne,
      type: 1,
      stock: false
    },
    {
      id: 2,
      name: "Salteña de pollo con llajua (x12)",
      quantityToShop: 12,
      img: EmpanadaPollo,
      type: 2,
      stock: true
    },
    {
      id: 3,
      name: "Jamon y queso (x12)",
      quantityToShop: 12,
      img: EmpanadaJamonYQueso,
      type: 3,
      stock: true
    },
    {
      id: 4,
      name: "Con mucho queso (x12)",
      quantityToShop: 12,
      img: EmpanadaQueso,
      type: 4,
      stock: true
    },
    {
      id: 5,
      name: "Espinaca y queso azul (x12)",
      quantityToShop: 12,
      img: EmpanadaEspinacaQueso,
      type: 5,
      stock: true
    },
    {
      id: 6,
      name: "Salteña de carne cortada a cuchillo con llajua (x6)",
      quantityToShop: 6,
      img: EmpanadaCarne,
      type: 1,
      stock: true
    },
    {
      id: 7,
      name: "Salteña de pollo con llajua (x6)",
      quantityToShop: 6,
      img: EmpanadaPollo,
      type: 2,
      stock: true
    },
    {
      id: 8,
      name: "Jamon y queso (x6)",
      quantityToShop: 6,
      img: EmpanadaJamonYQueso,
      type: 3,
      stock: false
    },
    {
      id: 9,
      name: "Con mucho queso (x6)",
      quantityToShop: 6,
      img: EmpanadaQueso,
      type: 4,
      stock: true
    },
    {
      id: 10,
      name: "Espinaca y queso azul (x6)",
      quantityToShop: 6,
      img: EmpanadaEspinacaQueso,
      type: 5,
      stock: true
    },
    {
      id: 11,
      name: "Salteña de carne cortada a cuchillo con llajua (x1)",
      quantityToShop: 1,
      img: EmpanadaCarne,
      type: 1,
      stock: true
    },
    {
      id: 12,
      name: "Salteña de pollo con llajua (x1)",
      quantityToShop: 1,
      img: EmpanadaPollo,
      type: 2,
      stock: true
    },
    {
      id: 13,
      name: "Jamon y queso (x1)",
      quantityToShop: 1,
      img: EmpanadaJamonYQueso,
      type: 3,
      stock: true
    },
    {
      id: 14,
      name: "Con mucho queso (x1)",
      quantityToShop: 1,
      img: EmpanadaQueso,
      type: 4,
      stock: true
    },
    {
      id: 15,
      name: "Espinaca y queso azul (x1)",
      quantityToShop: 1,
      img: EmpanadaEspinacaQueso,
      type: 5,
      stock: true
    },
  ];

  const currentQuantity = parseInt(id) === 1 ? "Empanadas por docena ($4.900)" : parseInt(id) === 2 ? "Empanadas por media docena ($2.600)" : parseInt(id) === 3 ? "Empanadas por unidad ($460)" : "Postres";

  return (
    <>
      {showAdd && <ProductDetail show={showAdd} setModal={setShowAdd} currentQuantity={currentQuantity} data={dataToModal} />}
      <div className="container p-4 d-grid justify-content-center align-items-center">
        {
          parseInt(id) !== 4
            ? products.slice((parseInt(id) - 1) * 5, parseInt(id) * 5).map((el, idx) => (
              <CardProduct key={idx} name={el.name} quantityToShop={el.quantityToShop} img={el.img} type={el.type} setModal={setShowAdd} setData={setDataToModal} />
            ))
            : <div>Próximamente</div>
        }
      </div>
    </>
  )
};

export default CategoryDetail;