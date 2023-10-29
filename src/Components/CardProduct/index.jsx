import { Link } from 'react-router-dom'
import './style.css'

const CardProduct = ({ id, name, quantityToShop, backgroundImg, img, type, setModal, setData }) => {

  const handlerData = () => {
    setModal && setModal(true);
    setData({
      quantityToShop,
      img,
      type,
    });
  };
  return (
    <div className="card-product" style={backgroundImg && {backgroundImage: `url(${backgroundImg})`}} onClick={handlerData}>
      {img && <img className="card-image" src={img} />}
      {
        !setModal ?
          <Link to={`/category/${id}`} className="link-dark link-underline-opacity-0">
            <p className="card-customized-title"  style={backgroundImg && {color: "white", fontWeight: "700"}}>{name}</p>
          </Link>
          :
          <p className="card-customized-title">{name}</p>
      }
    </div>
  )
};

export default CardProduct;