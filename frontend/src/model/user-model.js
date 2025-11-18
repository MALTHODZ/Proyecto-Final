import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    }
})

//Hago esto porque el hot reload de NextJS hace que mongoose recompile los modelos y eso lanza errores.
const User = mongoose.models.User || mongoose.model('User', userSchema, 'users');

export default User;