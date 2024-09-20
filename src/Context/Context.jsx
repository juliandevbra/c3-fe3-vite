import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { getRecipes } from "../Service/apiCalls";

const RecipeStates = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_CART": //Lo dejo de tarea. Utilizar .filter()
      return {};
    default:
      throw new Error("Acción no existente");
  }
};
const initialState = {
  cart: [],
  recipes: [],
};

const Context = ({ children }) => {
  // const [cart, setCart] = useState([]);
  // const [recipes, setRecipes] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const apiKey = "68d481a0fbc340308fbf934f836ee8c6";
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecipes(url);
      console.log(data);
      dispatch({ type: "GET_RECIPES", payload: data });
    };
    fetchData();
  }, []);

  return (
    <RecipeStates.Provider value={{ state, dispatch }}>
      {children}
    </RecipeStates.Provider>
  );
};
export default Context;

export const useRecipeStates = () => useContext(RecipeStates);
