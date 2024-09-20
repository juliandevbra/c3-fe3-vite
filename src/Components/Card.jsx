import Button from "./Button";
import CardStyles from "../Styles/Card.module.css";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import { useRecipeStates } from "../Context/Context";
import { toast } from "react-toastify";

const Card = ({ recipe }) => {
  const { dispatch } = useRecipeStates();
  const addCart = () => {
    dispatch({ type: "ADD_CART", payload: recipe });
    toast.success("Agregado al carrito");
  };
  return (
    <div className={CardStyles.cardContainer}>
      <img src={recipe.image} alt="" className={CardStyles.cardImg} />
      <h3>{recipe.title}</h3>
      <h4>${recipe.pricePerServing}</h4>
      <Counter />
      <Button onClick={addCart}>🛒</Button>
      <Link to={"/detail/" + recipe.id}>
        <Button>Ver detalle</Button>
      </Link>
    </div>
  );
};

export default Card;
