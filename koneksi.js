var mysql = require('mysql');

//KONEKSI DATABASE
const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "dbrest",
});

conn.connect((error)=>{
    if(error){
        return console.log('koneksi gagal');

    }
    console.log('koneksi berhasil');
});

module.exports = conn;
