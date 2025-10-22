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
                password1:'',
                password2:''
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

                if (!values.password1) {
                    error.password1 = 'Por favor introduce una contraseña';
                } else if (values.password1.length < 6) {
                    error.password1 = 'La contraseña debe tener al menos 6 caracteres';
                }

                if (!values.password2) {
                    error.password2 = 'Por favor confirma tu contraseña';
                } else if (values.password1 !== values.password2) {
                    error.password2 = 'Las contraseñas no coinciden';
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
                    <div>
                        <label htmlFor="contraseña">Contraseña</label>
                        <Field
                            type="password"
                            id="password1"
                            name="password1"
                            placeholder="crea una contraseña"
                        />
                        <ErrorMessage name="password1" component={() => (
                            <div className="error">{errors.password1}</div>
                        )}/>
                    </div>
                    <div>
                        <label htmlFor="contraseña">Contraseña</label>
                        <Field
                            type="password"
                            id="password2"
                            name="password2"
                            placeholder="pon la misma contraseña"
                        />
                        <ErrorMessage name="password2" component={() => (
                            <div className="error">{errors.password2}</div>
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