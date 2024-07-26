import "./App.css";
import Componente from "./Componente";
function App() {
  let mensaje = "Hola";
  let num = 1263676;
  return (
    <>
      <h1>Bienvenidos a Vite</h1>
      <input type="text" />
      <button>Enviar</button>
      <section>
        <h4>{mensaje} </h4>
        <p>{num}</p>
      </section>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Componente />
    </>
  );
}

export default App;
