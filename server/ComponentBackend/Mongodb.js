const mongoose=require('mongoose')

const DB_URL=process.env.DATABASE;
// const DB_URL="mongodb+srv://arinsingh:arinsingh@cluster0.49g1lsw.mongodb.net/mernproject?retryWrites=true&w=majority"

const dbConnect = ()=> {
    mongoose.connect(DB_URL)
    const db = mongoose.connection
    db.on('error',console.error.bind(console,'connection error'))
    db.once('open',()=> {
        console.log('DB connected...')
    })
}


module.exports = dbConnect