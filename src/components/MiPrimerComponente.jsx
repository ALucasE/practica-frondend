import { useState } from "react";

const MiPrimerComponente = () => {
  //TODO: 1)Generar el primer componente
    // const nombre = "Lucas";
    // return (
    //   <div>
    //     <h1>Bienvenidos a mi pagina</h1>
    //     <p>Creada por {nombre}</p>
    //   </div>
    // );
  //TODO: 2) Usando el useState
    const nombre = "Lucas";
    const [valor, setValue] = useState(0);

    setTimeout(() => {
      setValue(valor + 1);
    }, 1000);

    return (
      <div>
        <h1>Bienvenidos a mi pagina</h1>
        <p>Usted esta en esta pag hace {valor} segundos</p>
        <p>Creada por {nombre}</p>
      </div>
    );

};

export default MiPrimerComponente
