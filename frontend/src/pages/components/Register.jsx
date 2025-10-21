import { useState } from "react";

export default function Register () {
    const [inputNombre, cambiarInputNombre] = useState('');
    const [inputCorreo, cambiarInputCorreo] = useState('');

    // Funcion que se encargara de validar los datos
    const handleSubmit = (e) => {
        e.preventDefault();


        console.log('Formulario enviado');
    }

    const handleInputNombre = (e) => {
        cambiarInputNombre(e.target.value);
    }

    const handleInputCorreo = (e) => {
        cambiarInputCorreo(e.target.value);
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        id="nombre"
                        value={inputNombre}
                        onChange={handleInputNombre}
                    />
                </div>

                <div>
                    <label htmlFor="correo">Correo</label>
                    <input
                        type="text"
                        name="correo"
                        placeholder="Correo"
                        id="correo"
                        value={inputCorreo}
                        onChange={handleInputCorreo}
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </>
    );
}