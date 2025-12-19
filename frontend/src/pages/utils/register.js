
export const register = async (nombre, correo, password1) =>{
     const response = await fetch(`/api/register`,{
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             name: nombre,
             email: correo,
             password: password1
         })
     })

    const json = await response.json();

     return {
         status: response.status,
         error: json.error_code,
     }
 }