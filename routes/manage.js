const express = require('express');
const router = express.Router();
const db = require('../config/database').db;

router.get("/",(req,res)=>{
    let qry = "select * from employee_db.employee_details";
    db.query(qry,(err,rows)=>{
        if(err) throw err
        else
        res.render("manage", { rows });
    });      
});

router.get("/deleteuser/:email", (req,res)=>{
    let qry3 = " delete from employee_db.employee_details where email = ?";
    db.query(qry3, [req.params.email] ,(err,row)=>{
        if(err) throw err
        res.render("delete", {msg: true});
    });
    })
module.exports=router;

router.get("/update/:email",(req,res)=>{
    res.render("update");
});

router.get("/updateuser/:id",(req,res)=>{
    let qry = "select * from employee_db.employee_details where email = ?";
    db.query(qry,[req.params.email], (err,rows)=>{
        if(err) throw err
        else {
            res.render("update", {rows});   
        }
        let {name, department, salary} = req.query;
        // res.send(req.query);
    //     let qry2 = "update employee_db.employee_details set name = ?, department = ?, salary = ? where Id = ?";
    //     db.query(qry2, [name, department, salary, req.params.id], (err, results)=>{
        
    //     if(err) throw err
    //     else{
    //         if(results.affectedRows > 0)
    //         {
    //             res.render("update", {mesg: true})
    //         }
    //     }
    //    });
    });
     
    
});

module.exports = router;     