import { useEffect, useState } from "react";

const LifeCycles = () => {
  console.log("Parte funcional de un componente");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  let interval;

  //Ciclos de vida
  //Fase de montaje
  useEffect(() => {
    interval = setInterval(() => {
      console.log("Esto se ejecuta cada 1 segundo");
    }, 1000);

    setTimeout(() => {
      console.log("Esto ocurre una sola vez");
      setLoading(false);
    }, 2000);
  }, []);

  //Fase de actualización
  useEffect(() => {
    console.log("Se ejecuta a la primera y cada vez que loading se actualiza");
    if (!loading) {
      setUser({
        name: "Gina",
        pet: "cat",
      });
    }
  }, [loading]);
  // }, [loading, user]);
  // ❌ No colocar estados que van a a modificar dentro del useEffect
  //  adentro de las dependencias (En este caso, user)

  //Fase de desmontaje
  useEffect(() => {
    return () => {
      clearInterval(interval);
      console.log("Esto se ejecuta solo cuando se desmonta este componente");
    };
  }, []);

  return (
    <div>
      {console.log("Parte render de un componente")}
      {loading ? "Cargando..." : <h2>Hola, {user.name}</h2>}
    </div>
  );
};

export default LifeCycles;
