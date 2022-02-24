const express = require('express');

const mongoose = require('mongoose');
const app = express();

// mongoose.connect('mongodb://localhost:27017/signup', {
//     useNewUrlParser: true
// }


// ).then(() => {
//     console.log("database is connected")
// }).catch((err) => {
//     console.log(err)
// });

// const user = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true,
//         unique: true
//     }

// });

// const User = new mongoose.model("users", user);

// app.post('/signUp', (req, res) => {
//     const { username, password } = req.body;
//     User.findOne({ username: username }, (err, user) => {
//         if (user) {
//             res.send({ message: "user already registered" })
//         } else {
//             const user = new User({
//                 username,
//                 password
//             })
//             user.save(err => {
//                 if (err) {
//                     res.send(err)
//                 } else {
//                     res.send({ message: "user succesfully registered" })
//                 }
//             })
//         }
//     })

// })

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const User = new mongoose.model("User1", userSchema)

//Routes
app.post("/signup", (req, res) => {
    const { username, password } = req.body
    User.findOne({ username: usernam }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                username,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})