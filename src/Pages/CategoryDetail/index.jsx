import { useState } from 'react';
import { useParams } from 'react-router-dom'
import CardProduct from '../../Components/CardProduct'
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
      img: "/public/empanada-carne.svg",
      type: 1,
    },
    {
      id: 2,
      name: "Salteña de pollo con llajua (x12)",
      quantityToShop: 12,
      img: "/public/empanada-pollo.svg",
      type: 2,
    },
    {
      id: 3,
      name: "Jamon y queso (x12)",
      quantityToShop: 12,
      img: "/public/empanada-jamon-queso.svg",
      type: 3,
    },
    {
      id: 4,
      name: "Con mucho queso (x12)",
      quantityToShop: 12,
      img: "/public/empanada-queso.svg",
      type: 4,
    },
    {
      id: 5,
      name: "Espinaca y queso azul (x12)",
      quantityToShop: 12,
      img: "/public/empanada-espinaca-queso.svg",
      type: 5,
    },
    {
      id: 6,
      name: "Salteña de carne cortada a cuchillo con llajua (x6)",
      quantityToShop: 6,
      img: "/public/empanada-carne.svg",
      type: 1,
    },
    {
      id: 7,
      name: "Salteña de pollo con llajua (x6)",
      quantityToShop: 6,
      img: "/public/empanada-pollo.svg",
      type: 2,
    },
    {
      id: 8,
      name: "Jamon y queso (x6)",
      quantityToShop: 6,
      img: "/public/empanada-jamon-queso.svg",
      type: 3,
    },
    {
      id: 9,
      name: "Con mucho queso (x6)",
      quantityToShop: 6,
      img: "/public/empanada-queso.svg",
      type: 4,
    },
    {
      id: 10,
      name: "Espinaca y queso azul (x6)",
      quantityToShop: 6,
      img: "/public/empanada-espinaca-queso.svg",
      type: 5,
    },
    {
      id: 11,
      name: "Salteña de carne cortada a cuchillo con llajua (x1)",
      quantityToShop: 1,
      img: "/public/empanada-carne.svg",
      type: 1,
    },
    {
      id: 12,
      name: "Salteña de pollo con llajua (x1)",
      quantityToShop: 1,
      img: "/public/empanada-pollo.svg",
      type: 2,
    },
    {
      id: 13,
      name: "Jamon y queso (x1)",
      quantityToShop: 1,
      img: "/public/empanada-jamon-queso.svg",
      type: 3,
    },
    {
      id: 14,
      name: "Con mucho queso (x1)",
      quantityToShop: 1,
      img: "/public/empanada-queso.svg",
      type: 4,
    },
    {
      id: 15,
      name: "Espinaca y queso azul (x1)",
      quantityToShop: 1,
      img: "/public/empanada-espinaca-queso.svg",
      type: 5,
    },
  ];

  const currentQuantity = parseInt(id) === 1 ? "Empanadas por docena ($4.900)" : parseInt(id) === 2 ? "Empanadas por media docena ($2.600)" : parseInt(id) === 3 ? "Empanadas por unidad ($460)" : "Postres";

  return (
    <>
      {
        showAdd && <ProductDetail show={showAdd} setModal={setShowAdd} currentQuantity={currentQuantity} data={dataToModal} />
      }
      <div className="container p-4 d-grid justify-content-center align-items-center">
        {
          parseInt(id) !== 4 ?
            products.slice((parseInt(id) - 1) * 5, parseInt(id) * 5).map((el, idx) => {
              return (
                <CardProduct key={idx} name={el.name} quantityToShop={el.quantityToShop} img={el.img} type={el.type} setModal={setShowAdd} setData={setDataToModal} />
              )
            })
            :
            <div>Próximamente mi rey</div>
        }
      </div>
    </>
  )
};

export default CategoryDetail;