import {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Register () {

    const [sendForm, setSendForm] = useState(false)

    return(
    <div>
        <Formik
            initialValues={{
                nombre:'',
                correo:'',
            }}
            validate={(values) => {
                let error = {};
                if (!values.nombre) {
                    error.nombre = 'Por favor introduce un nombre';
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
                    error.nombre = 'El nombre solo puede contener letras y espacios';
                    }
                if (!values.correo) {
                    error.correo = 'Por favor introduce un correo';
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo)){
                    error.correo = 'El correo solo puede contener letras, numeros, puntos y guiones';
                }
                return error;
            }}
            //Envia el formulario donde yo quiera y resetea el formulario
            onSubmit={(values, { resetForm })=>{
                resetForm();
                console.log("enviado")
                setSendForm(true)
                setTimeout(() => setSendForm(false),3000)
            }}
        >
            {({errors}) => (
                <Form>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <Field
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre de usuario"
                        />
                        <ErrorMessage name="nombre" component={() => (
                            <div className="error">{errors.nombre}</div>
                        )}/>
                    </div>
                    <div>
                        <label htmlFor="correo">Correo</label>
                        <Field
                            type="text"
                            id="correo"
                            name="correo"
                            placeholder="nombre@correo.com"
                        />
                        <ErrorMessage name="correo" component={() => (
                            <div className="error">{errors.correo}</div>
                        )}/>
                    </div>
                    <button type="submit">Register</button>
                    {sendForm && <p>Te has registrado con exito!</p>}
                </Form>
            )}
        </Formik>
    </div>
    )
}