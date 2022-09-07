const express =  require('express')
const app = express()
const connectDB = require('./config/database')
const TodoRoute = require('./routes/todoRoutes')
const homeRoute = require('./routes/homeRoutes')



require('dotenv').config({path : './config/.env'})

connectDB()


// Configuring My MiddleWares
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())


// configuring my Routes

app.use('/', homeRoute)
app.use('/todos', TodoRoute)


// Linking to my local server

app.listen(process.env.PORT, () => {
    console.log(`Server is Running`)
})
