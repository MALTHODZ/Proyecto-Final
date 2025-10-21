import { Formik } from "formik";

export default function Register () {
    return(
    <div>
        <Formik
            initialValues={{
                nombre:'Babunger',
                correo:'Babunger@gmail.com',
            }}
            validate={(values) => {
                let error = {};
                if (!values.nombre) {
                    error.nombre = 'Por favor introduce un nombre';
                } else if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
                    error.nombre = 'El nombre solo puede contener letras y espacios';
                    }
                return error;
            }}
            onSubmit={()=>{
                console.log("enviado")
            }}
        >
            {({values, errors, handleSubmit, handleChange,handleBlur}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre de usuario"
                            value={values.nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.nombre && <div>{errors.nombre}</div>}
                    </div>
                    <div>
                        <label htmlFor="correo">Correo</label>
                        <input
                            type="text"
                            id="correo"
                            name="correo"
                            placeholder="nombre@correo.com"
                            value={values.correo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.correo && <div>{errors.correo}</div>}
                    </div>
                    <button type="submit">Register</button>
                </form>
            )}
        </Formik>
    </div>
    )
}