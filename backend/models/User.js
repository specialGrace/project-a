import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    fullName:{type:String, required:[true, 'name is required']},
    number: { type: Number, required: [true, 'number is required'] },
    password: { type: String, required: [true, 'password is required'] },
  confirmPassword: { type: String, required: [true, 'confirmpassword is required'] },
    email:{type:String, unique:true, required:[true, 'email is required']}
},

    {
        timestamp: true
    }
)

const User = mongoose.model('User', userSchema)
export default User