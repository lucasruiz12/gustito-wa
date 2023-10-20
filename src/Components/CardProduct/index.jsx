import { Link } from 'react-router-dom'
import './style.css'

const CardProduct = ({ id, name, price, img, setModal, setData }) => {

  const handlerData = () => {
    setModal && setModal(true);
    setData({
      id,
      name,
      price,
      img,
    });
  };

  return (
    <>
      <div className="row p-2 my-2 d-flex align-items-center border rounded" onClick={handlerData}>
        {

          !setModal ?
            <Link to={`/category/${id}`} className="link-dark link-underline-opacity-0">
              <p className="pt-3">{name}</p>
            </Link>
            :
            <p className="pt-3">{name}</p>
        }
      </div>
    </>
  )
};

export default CardProduct;