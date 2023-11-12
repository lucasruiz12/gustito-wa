import React from 'react';
import CardProduct from '../../Components/CardProduct';
import { CardBackground1, CardBackground2, CardBackground3, CardBackground4 } from "../../assets";
import './style.css'

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Empanadas por docena",
      active: true,
      img: CardBackground1
    },
    {
      id: 2,
      name: "Empanadas por media docena",
      active: true,
      img: CardBackground2
    },
    {
      id: 3,
      name: "Empanadas por unidad",
      active: true,
      img: CardBackground3
    },
    {
      id: 4,
      name: "Postres",
      active: false,
      img: CardBackground4
    },
  ];

  return (
    <div className="container p-4 d-grid align-items-center">
      {categories.map((el, idx) => (
        <div key={idx}>
          <CardProduct id={el.id} name={el.name} price={el.price} backgroundImg={el.img} active={el.active} />
        </div>
      ))}
    </div>
  );
};

export default Home;