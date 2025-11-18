import User from "@/model/user-model";
import {dbConnect} from "@/lib/mongo";

export default async function handler(req, res) {
    const { name, email, password } = req.body;
    console.log(req.body);
    // Crear una conexion con DB
    await dbConnect();

    //Update the DB
    try{
        const userWithEmailExists = await User.findOne({
            email
        });

        if (userWithEmailExists) {
            res.status(400).json({ message: 'User already exists.' });
            return;
        }

        await User.create({
            name,
            email,
            password,
        })
    }catch(error){
        res.status(400).json({ message: 'User cannot be created.' });
        return;
    }

    res.status(201).json({ message: 'User Created' });
}