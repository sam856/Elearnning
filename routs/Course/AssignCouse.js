const router = require("express").Router();
 const conn = require ("../../Db/dbConnection.js");
const {body,validationResult}=require("express-validator");
const util = require('util');


 // Api for list Coursesname
router.get("",
    async (req, res) => {
        const query = util.promisify(conn.query).bind(conn);
        let search = "";
        if (req.query.search){
        search = 
        `where name LIKE '%${req.query.search}%' `;
        }
        const Coursesname = await query(`select name from course ${search}`);
        res.status(400).json(Coursesname);
    });

 // Api for List instractor 
router.get("/Allinstractor",
    async (req, res) => {
        const query = util.promisify(conn.query).bind(conn);
        let search = "";
        if (req.query.search){
        search = 
        `where name LIKE '%${req.query.search}%' `;
        }
        const instractorsNames = await query(`select name from instractor ${search}`);
        res.status(400).json(instractorsNames);
    });
 
//Api For Assign  Course
router.put("/AssignCourse/:id", 
body("id")
.isString()
.withMessage("Please enter Course name")
.isLength({ min: 1 })
.withMessage("Course name should at least 1 charachter"),

async (req, res) => {


    try {
        const query = util.promisify(conn.query).bind(conn);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        // Check  if instractor is Exsits or not
        const instractor = await query("select * from instractor where id  = ?", [req.params.id]);
        if (!instractor[0]) {
            res.status(404).json({ Message: "instractor Not Found" });
        }
        //check if course is exsits or not
        const Course = await query("select * from course where id  = ?", [req.body.id]);
        if (!Course[0]) {
            res.status(404).json({ Message: "instractor Not Found" });
        }
        // insert course_id into instractor 
        const AssignCourse = await query
        ("UPDATE instractor SET course_id = ? WHERE id = ?",
        [req.body.id,req.params.id]
        );
        res.status(200).json({
            Message : "Course Assigned Successfully",
           });
 
         }
        catch (err) {
            res.status(500).json(err);
        }
});


  
module.exports = router;