const router = require("express").Router();
const conn = require("../../Db/dbConnection.js");
const authorazied = require("../../middleware/Authorized.js");
const { body, validationResult } = require("express-validator");
const util = require('util');

// Api for list Courses
router.get("",
 async (req, res) => {
    const query = util.promisify(conn.query).bind(conn);
    let search = "";
    if (req.query.search){
    search = 
    `where name LIKE '%${req.query.search}%' 
     or code LIKE '% ${req.query.search}%' 
     or STATUS LIKE '%${req.query.search}%' `;
    }
    const AllCourses = await query(`select * from course ${search}`);
     res.status(400).json(AllCourses);
});

// Api for  delete course
router.delete("/deleteCourse/:id",
    async (req, res) => {
        try {
            const query = util.promisify(conn.query).bind(conn);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            // Check  if Course is Exsits or not
            const course = await query("select * from course where id  = ?", [req.params.id]);
            if (!course[0]) {
                res.status(404).json({ Message: "Course Not Found" });
            }
            //delete Course
            await query("Delete FROM  course  where id = ?", [
                course[0].id
            ]);
            res.status(200).json({
                Message: "Course Deleted Successfully",
            });

        }
        catch (err) {
            res.status(500).json(err);
        }
    });

//Api For update  Course
router.put("/updateCourse/:id",
    body("name")
        .isString()
        .withMessage("Please enter Course name")
        .isLength({ min: 5 })
        .withMessage("Course name should at least 5 charachter"),

    body("code")
        .isString()
        .withMessage("Please enter Course code")
        .isLength({ min: 3 })
        .withMessage("Course code should at least 3 charachter"),

    body("STATUS")
        .isString()
        .withMessage("Please enter Course staus")
        .isLength({ min: 6 })
        .withMessage("Course code should at least 6 charachter"),

    async (req, res) => {
        try {
            const query = util.promisify(conn.query).bind(conn);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array() })
            }
            // Check  if Course is Exsits or not
            const course = await query("select * from course where id  = ?",[req.params.id]);
            if (!course[0])
            {
                res.status(404).json({Message : "Course Not Found"});
            }

            // prepare course object 
            const CourseObj = {
                name:req.body.name,
                code:req.body.code,
                STATUS:req.body.STATUS,
            };

            //Update Course 
            await query ("UPDATE course SET ? where id = ?",[
                CourseObj,course[0].id
            ]);
             res.status(200).json({
              Message : "Course Updated Successfully",
             });
            

        }
        catch (err){
            res.status(500).json(err);
        }
    });

 



module.exports = router;