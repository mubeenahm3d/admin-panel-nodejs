const database = require("mysql2")

const pool = database.createConnection({
    host: "localhost",
    user: "root",
    database: "mttp_final",
    password: "wordpass"
})

pool.connect((err)=> {
    if(err) throw err
    console.log("Database connected successfully.")
})

module.exports = pool.promise()