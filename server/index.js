const express = require('express')

// passport config
require('./services/passport')


const app = express()

// import & bind routes to app
require('./routes/auth')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)