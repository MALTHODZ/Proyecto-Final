import { dbConnect } from "@/lib/mongo";
import User from "@/model/user-model";

export default async function login(req, res) {
    // Solo permite metodo post
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    // Validar datos
    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    await dbConnect();

    try {
        const userExist = await User.findOne({
            email,
            password
        });

        if (!userExist) {
            return res.status(404).json({ message: 'Email o contraseña incorrectos' });
        }

        return res.status(200).json({
            message: 'Login exitoso',
            user: {
                id: userExist._id,
                email: userExist.email,
                name: userExist.name || ''
            }
        });

    } catch(error) {
        console.error('Error en login:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
}