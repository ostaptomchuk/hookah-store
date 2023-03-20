import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../Redux/Reducers/products-reducer";

const ProductDetails = () => {
  const product = useSelector((state) => state.products.activeProduct);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductByID(id));
  }, [id]);
  return (
    <div>
      {/*<img src={product.image}></img>*/}
      <ul>
        {product.map((el) => {
          return (
            <li
              key={el.value}
            >{`${el.label} ${el.value}`}</li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProductDetails;
