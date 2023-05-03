const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true})) ;
const cors = require ("cors") ;
app.use (cors());

const AssignCouse = require ("./routs/Course/AssignCouse.js");
const CRUDcourse = require("./routs/Course/CRUDcourse.js");


app.listen(4000,"localhost",()=> {
   console.log("Server is Running");

});
app.use("/AssignCouse",AssignCouse);
app.use("/CRUDcourse",CRUDcourse);