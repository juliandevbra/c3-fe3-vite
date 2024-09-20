import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withErrorBoundary from "../HOC/withErrorBoundary";
import { getRecipe } from "../Service/apiCalls";

const Detail = () => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(params);
  const apiKey = "68d481a0fbc340308fbf934f836ee8c6";
  const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;
  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipe(url);
      setRecipe(data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    fetchRecipe();
  }, []);

  return (
    <div>
      {loading ? (
        "Acá va nuestro spinner"
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt="" />
          <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        </>
      )}
    </div>
  );
};
const DetailWithError = withErrorBoundary(Detail);
export default DetailWithError;
