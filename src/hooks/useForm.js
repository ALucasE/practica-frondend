import { useState } from "react";

const useForm = (initialValues) => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Retorna el estado del formulario, la función para manejar cambios y la función para manejar el envío
  return { formData, handleInputChange };
};

export default useForm;

/* 
USO En el componente formulario

import React from 'react';
import useSubmitForm from './useSubmitFormHook';

function MiFormulario() {
  //Crear el estado inicial con los datos necesarios del formulario
  const initialState = {
    name: '',
    lastName: '',
  };

  const submitCallback = (formData) => {
    console.log('Datos enviados:', formData);
    // Puedes realizar otras acciones, como enviar datos al servidor, con Axios o fetch, por ejemplo.
  };

  const { formData, handleSubmit } = useSubmitForm(initialState);

  return (
    //Aquí se envía la prevención de actualización
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input
          type="text"
          //Aquí están los datos que se envían al initialState
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="text"
          name="lastName"
          //Aquí están los datos que se envían al initialState
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      //Aqui se llama a reset para limpiar el formulario
      <button type="submit" onClick={reset}>Enviar</button>
    </form>
  );
}

export default MiFormulario;

*/
