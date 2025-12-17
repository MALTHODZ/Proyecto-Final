import { Formik, Form, Field } from "formik";
import {useRouter} from "next/router";
import MainLayout from "@/pages/layouts/main-layout";
import {useUser} from "@/pages/hooks/useUser";

export default function Login(){
    const { setUser } = useUser();
    const router = useRouter();

    async function handleFormSubmit(formData){

        try{
            const response = await fetch(`/api/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                })
            })

            if(response.status === 200){
                const json = await response.json();
                setUser(json.user);
                router.push('/');
            }else{
                window.alert('Error al iniciar sesion')
            }
        }catch(e){
            console.error(e.message)
            window.alert('Error de conexion para iniciar sesión');
        }
    }

    return (
        <MainLayout>
            <div className="form-page">
                <div className="form-book">
                    <div>
                        <h2 className="form-subtitle">Inicia sesion en la web</h2>
                    </div>
                </div>
            <Formik
                initialValues={{
                    email:'',
                    password:''
                }}
                onSubmit={handleFormSubmit}
                >
                <Form className="form-card">
                <div>
                    <label htmlFor="email">Email</label>
                    <Field
                        type="text"
                        id="email"
                        name="email"
                        placeholder="pon tu email registrado"
                        className="form-input"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="pon tu contraseña"
                        className="form-input"
                    />
                </div>
                <button className="form-button" type="submit">
                    Haz click para iniciar sesion
                </button>
                </Form>
            </Formik>
            </div>
        </MainLayout>
    )
}