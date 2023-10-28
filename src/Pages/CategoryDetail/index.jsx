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
      name: "Empanada de carne (x12)",
      quantityToShop: 12,
      img: "NO",
      type: 1,
    },
    {
      id: 2,
      name: "Empanada de pollo (x12)",
      quantityToShop: 12,
      img: "NO",
      type: 2,
    },
    {
      id: 3,
      name: "Empanada de jamon y queso (x12)",
      quantityToShop: 12,
      img: "NO",
      type: 3,
    },
    {
      id: 4,
      name: "Empanada de solo queso (x12)",
      quantityToShop: 12,
      img: "NO",
      type: 4,
    },
    {
      id: 5,
      name: "Empanada de espinaca y queso azul (x12)",
      quantityToShop: 12,
      img: "NO",
      type: 5,
    },
    {
      id: 6,
      name: "Empanada de carne (x6)",
      quantityToShop: 6,
      img: "NO",
      type: 1,
    },
    {
      id: 7,
      name: "Empanada de pollo (x6)",
      quantityToShop: 6,
      img: "NO",
      type: 2,
    },
    {
      id: 8,
      name: "Empanada de jamon y queso (x6)",
      quantityToShop: 6,
      img: "NO",
      type: 3,
    },
    {
      id: 9,
      name: "Empanada de solo queso (x6)",
      quantityToShop: 6,
      img: "NO",
      type: 4,
    },
    {
      id: 10,
      name: "Empanada de espinaca y queso azul (x6)",
      quantityToShop: 6,
      img: "NO",
      type: 5,
    },
    {
      id: 11,
      name: "Empanada de carne (x1)",
      quantityToShop: 1,
      img: "NO",
      type: 1,
    },
    {
      id: 12,
      name: "Empanada de pollo (x1)",
      quantityToShop: 1,
      img: "NO",
      type: 2,
    },
    {
      id: 13,
      name: "Empanada de jamon y queso (x1)",
      quantityToShop: 1,
      img: "NO",
      type: 3,
    },
    {
      id: 14,
      name: "Empanada de solo queso (x1)",
      quantityToShop: 1,
      img: "NO",
      type: 4,
    },
    {
      id: 15,
      name: "Empanada de espinaca y queso azul (x1)",
      quantityToShop: 1,
      img: "NO",
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