import React from 'react';
import CardProduct from '../../Components/CardProduct';
import { DocenaImg, MediaDocenaImg, UnidadImg, PostreImg } from "../../assets";
import './style.css'

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Empanadas por docena",
      active: true,
      img: DocenaImg
    },
    {
      id: 2,
      name: "Empanadas por media docena",
      active: true,
      img: MediaDocenaImg
    },
    {
      id: 3,
      name: "Empanadas por unidad",
      active: true,
      img: UnidadImg
    },
    {
      id: 4,
      name: "Postres",
      active: false,
      img: PostreImg
    },
  ];

  return (
    <div className="cardProductContainer">
      {categories.map((el) => (
        <CardProduct id={el.id} name={el.name} price={el.price} backgroundImg={el.img} active={el.active} />
      ))}
    </div>
  );
};

export default Home;