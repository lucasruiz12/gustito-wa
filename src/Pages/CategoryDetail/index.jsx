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
      name: "Docena de carne",
      price: 4900,
      img: "NO"
    },
    {
      id: 2,
      name: "Docena de pollo",
      price: 4900,
      img: "NO"
    },
    {
      id: 3,
      name: "Docena de jamon y queso",
      price: 4900,
      img: "NO"
    },
    {
      id: 4,
      name: "Docena de solo queso",
      price: 4900,
      img: "NO"
    },
    {
      id: 5,
      name: "Docena de espinaca y queso azul",
      price: 4900,
      img: "NO"
    },
    {
      id: 6,
      name: "Media docena de carne",
      price: 2600,
      img: "NO"
    },
    {
      id: 7,
      name: "Media docena de pollo",
      price: 2600,
      img: "NO"
    },
    {
      id: 8,
      name: "Media docena de jamon y queso",
      price: 2600,
      img: "NO"
    },
    {
      id: 9,
      name: "Media docena de solo queso",
      price: 2600,
      img: "NO"
    },
    {
      id: 10,
      name: "Media docena de espinaca y queso azul",
      price: 2600,
      img: "NO"
    },
    {
      id: 11,
      name: "Empanada de carne",
      price: 460,
      img: "NO"
    },
    {
      id: 12,
      name: "Empanada de pollo",
      price: 460,
      img: "NO"
    },
    {
      id: 13,
      name: "Empanada de jamon y queso",
      price: 460,
      img: "NO"
    },
    {
      id: 14,
      name: "Empanada de solo queso",
      price: 460,
      img: "NO"
    },
    {
      id: 15,
      name: "Empanada de espinaca y queso azul",
      price: 460,
      img: "NO"
    },
  ];

  const currentQuantity = parseInt(id) === 1 ? "Empanadas por docena" : parseInt(id) === 2 ? "Empanadas por media docena" : parseInt(id) === 3 ? "Empanadas por unidad" : "Postres";

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
                <CardProduct key={idx} id={el.id} name={el.name} price={el.price} img={el.img} type={"detail"} setModal={setShowAdd} setData={setDataToModal} />
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