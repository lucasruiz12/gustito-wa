import CardProduct from '../../Components/CardProduct';
import './style.css'

const Home = () => {

  const categories = [
    {
      id: 1,
      name: "Empanadas por docena",
      active: true,
      img: '/public/card-background-1.png'
    },
    {
      id: 2,
      name: "Empanadas por media docena",
      active: true,
      img: '/public/card-background-2.png'
    },
    {
      id: 3,
      name: "Empanadas por unidad",
      active: true,
      img: '/public/card-background-3.png'
    },
    {
      id: 4,
      name: "Postres",
      active: false,
      img: '/public/card-background-4.png'
    },
  ];

  return (
    <div className="container p-4 d-grid align-items-center">
      {
        categories.map((el, idx) => {
          return (
            <div key={idx}>
              <CardProduct id={el.id} name={el.name} price={el.price} backgroundImg={el.img} active={el.active} />
            </div>
          )
        })
      }
    </div>
  )
};

export default Home;