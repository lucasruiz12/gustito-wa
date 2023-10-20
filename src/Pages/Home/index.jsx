import CardProduct from '../../Components/CardProduct';
import './style.css'

const Home = () => {

  const categories = [
    {
      id: 1,
      name: "Empanadas por docena",
      active: true,
    },
    {
      id: 2,
      name: "Empanadas por media docena",
      active: true,
    },
    {
      id: 3,
      name: "Empanadas por unidad",
      active: true,
    },
    {
      id: 4,
      name: "Postres",
      active: false,
    },
  ];

  return (
    <>
      <div className="container p-4 d-grid justify-content-center align-items-center">

        {
          categories.map((el, idx) => {
            return (
              <div key={idx}>
                <CardProduct id={el.id} name={el.name} price={el.price} img={el.img} active={el.active} type={"category"} />
              </div>
            )
          })
        }
      </div>
    </>
  )
};

export default Home;