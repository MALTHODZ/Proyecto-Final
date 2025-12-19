export const login = async (email, password) =>{
    const response = await fetch(`/api/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    });


    const json = await response.json();

    return {
        status: response.status,
        data: json
    }
}