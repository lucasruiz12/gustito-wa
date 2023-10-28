import { Link } from 'react-router-dom'
import './style.css'

const CardProduct = ({ id, name, quantityToShop, img, type, setModal, setData }) => {

  const handlerData = () => {
    setModal && setModal(true);
    setData({
      quantityToShop,
      img,
      type,
    });
  };

  return (
    <>
      <div style={img ? { backgroundImage: `url(${img}` } : { backgroundColor: '#5a050b' }} className="card-product" onClick={handlerData}>
        {

          !setModal ?
            <Link to={`/category/${id}`} className="link-dark link-underline-opacity-0">
              <p className="card-customized-title">{name}</p>
            </Link>
            :
            <p className="card-customized-title">{name}</p>
        }
      </div>
    </>
  )
};

export default CardProduct;