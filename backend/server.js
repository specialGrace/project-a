import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.MONGODB_URI)
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
 import  connectDB from './config/db.js'
import colors from 'colors'
 import User from './models/User.js'
// invoke the express app and save in a variable
let app = express()

// setup cors
app.use(cors())
app.use(morgan('dev'))
app.use(express.json({limit:'50mb'}))

app.get('/', (req, res) => {
    res.redirect('api/v1')
})

app.get("/api/v1", (req, res) => {
  res.json("you are welcome to backend");
});

// find user using the provided name, email and password
// app.get('/user', (req, res) => {
//     const{name, email, password} = req.query
//     console.log(name, password, email)
//     res.json({
//         status: 'success',
//         data: {
//             email,
//             password,
//             name
//         }
//   })
// });

// app.get("/signin", (req, res) => {
//   res.send("This is demo route for sign in");
// });

// app.get("/signin/dashboard", (req, res) => {
//   res.send("This is demo route for user who signed in and now reaches their dashboard");
// });

// CRUD - CREATE, READ, UPDATE, DELETE

// @desc create user
// @route POST /api/v1/user
// @ access public

app.post("/api/v1/signup", async (req, res) => {
    const { fullName, email, number, password, confirmPassword } = req.body;
    console.log(fullName)
  try {
    const user = await User.create({
      fullName: fullName,
      email,
      number,
      password,
      confirmPassword,
    });

    res.json({
      status: "success",
      user,
    });
  } catch (err) {
    res.json({
      status: "failed",
      error: err.message,
    });
  }
});

app.post('/api/v1/user', async(req, res) => {
    const { name, email, age } = req.body
    try {
        const user = await User.create({
            name: name,
            email,
            age
        })

           res.json({
            status: 'success',
            user
        })

    } catch (err) {
        res.json({
            status: 'failed',
            error:err.message
        })
    }
})

// @desc get users
// @route GET /api/v1/users
// @access public
app.get('/api/v1/users', async(req, res) => {
    try {
        const users = await User.find({})

        if (!users) {
            throw Errow('No user found')
        }
           res.json({
            status: 'success',
            users
        })

    } catch (err) {
        res.json({
            status: 'failed',
            error:err.message
        })
    }
})


// @desc update users
// @route PUT /api/v1/users/:id
// @access public
app.get('/api/v1/users/id', async (req, res) => {
    const { id } = req.params;
    const {name, age}=req.body
    console.log('id', id)
    try {
        const user = await User.findById({_id:id})

        if (!user) {
            throw Errow('No user found')
        }

        if (name) {
            user.name=name
        }

        if (age) {
            user.age=age
        }

        const updatedUser=await user.save()
           res.json({
            status: 'success',
            updatedUser
        })

    } catch (err) {
        res.json({
            status: 'failed',
            error:err.message
        })
    }
})



// @desc delete users
// @route DELETE /api/v1/users
// @access public
app.delete("/api/v1/users/id", async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const user = await User.findById({ _id: id });

    if (!user) {
      throw Errow("No user found");
    }

      await user.remove()

    res.status(200).json({
      status: "success",
      message:'User successfully deleted'
    })
      
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: err.message
    });
  }
});


const start = async(PORT) => {
    try {
        // connect to database
        const conn = await connectDB()
        
        // application listening
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err)
                return
            }
           console.log(`server is running on ${PORT}`.green.underline)
        })
         console.log(`Mongodb is connect to ${conn.connection.host}`.yellow.underline );
        
    } catch (err) {
        console.log(`${err.message}`.red.underline.bold)
    }
}
start(5000)


