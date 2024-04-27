const express=require('express');
const router=express.Router();
const db = require('../config/database').db;
router.get("/", (req,res)=>{
    const {name, email, department, salary, username, password} = req.query;
    let qry = "insert into employee_db.employee_details(fullname,email,department,salary,username,password) values (?,?,?,?,?,?)"; 
    db.query(qry,[name, email, department, salary, username, password], (err,result)=>{
        // res.send(result);
        if(result.affectedRows > 0) {
            res.render("user",{msg: true});
        }
    });
});

module.exports = router;