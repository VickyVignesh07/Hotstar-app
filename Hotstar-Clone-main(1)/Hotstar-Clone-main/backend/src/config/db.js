const mongoose = require('mongoose')

db = `mongodb://localhost:27017/hotstar`

module.exports = () => mongoose.connect(db)

// `mongodb+srv://hotstar:hotstar@cluster0.eavlw.mongodb.net/hotstar?retryWrites=true&w=majority`