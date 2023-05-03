const mysql = require ("mysql");
const connection = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"Project",
    port :"3306"

}
);
connection.connect((err)=>{
    if (err){
        console.error(" Connection error ");
        return;
    }

    else {
        console.log(" Connection to database" );
    }
    
});
module.exports = connection;