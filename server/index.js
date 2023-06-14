require('dotenv').config()
const session = require('express-session')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MongoDBStore = require('connect-mongodb-session')(session)
const loginRouter = require('./routes/loginRoutes')
const bookRouter=require('./routes/bookRoutes');
const app = express()
const MAX_AGE = 1000 * 60 * 60 * 3 // 3hrs
const port = process.env.PORT || 5001

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
})

const mongoDBstore = new MongoDBStore({
  uri: process.env.DATABASE_CONNECTION_STRING,
  collection: 'mySessions',
})

app.use(
  session({
    secret: 'a1s2d3f4g5h6',
    name: 'session-id',
    store: mongoDBstore,
    cookie: {
      maxAge: MAX_AGE,
      sameSite: false,
      secure: false,
    },
    resave: true,
    saveUninitialized: false,
  })
)

app.use(cors(corsOptions))
app.use(express.json())

// ROUTERS
app.use('/api', loginRouter)
app.use('/api',bookRouter)
// START SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

module.exports = app
