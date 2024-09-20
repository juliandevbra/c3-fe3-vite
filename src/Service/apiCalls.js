import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const getRecipes = async (url) => {
  try {
    const { data } = await axios(url);
    toast("Lista obtenida!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return data.recipes;
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error al obtener la lista",
      footer: err,
    });
  }
};

export const getRecipe = async (url) => {
  try {
    const { data } = await axios(url);
    return data;
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error al obtener la receta",
    });
  }
};
