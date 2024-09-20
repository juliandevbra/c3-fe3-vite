import Card from "../Components/Card";
import { useRecipeStates } from "../Context/Context";
import withErrorBoundary from "../HOC/withErrorBoundary";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "20%",
  margin: "10px auto",
  borderRadius: "10px",
};

const Home = () => {
  const { state } = useRecipeStates();

  return (
    <>
      <h1 style={titleStyles}>Lista de pizza</h1>
      <div className="list-container">
        {state.recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};
const HomeWithError = withErrorBoundary(Home);
export default HomeWithError;
