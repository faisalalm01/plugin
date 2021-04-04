const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended:false}))


const koneksiDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "week1"
})

koneksiDB.connect((err)=>{
    if(err){
        console.log("database error");
    }else{
        console.log("database terhubung");
    }
});

app.get("/api/food",(req, res)=>{
    let sql = "Select * from foods";
    koneksiDB.query(sql, (err, result)=>{
        if(err){
            res.send({
                msg: "failed get data",
                status: 500,
                err,
            })
        }else{
            res.send({
                msg: "get data success",
                status:200,
                data: result
            })
        }
    })
})

app.post("/api/food", (req, res)=>{
    let {body} = req;
    let sql = " INSERT INTO foods SET ?";
    koneksiDB.query(sql, body,(err, result)=>{
        if(err){
            res.send({
                msg: "add data error",
                status: 500,
                err,
            })
        }else{
            let newBody = {
                id: result.insertId,
                ...body,
            };
            res.send({
                msg: "add data sucess",
                status: 200,
                data: newBody,
            })
        }
    })
})

app.get("/api/food/:id", (req, res)=>{
    let {id} = req.params;
    let sql = `SELECT * FROM foods WHERE id=${id}`;
    koneksiDB.query(sql,(err, result)=>{
        if(err){
            res.send({
                msg: "GET DATA ID ERROR",
                status: 500,
                err,
            })
        }else{
            res.send({
                msg: "GET DATA ID SUCCESS",
                status:200,
                data: result
            })
        }
    })
})

//delete
app.delete("/api/food/:id", (req, res)=>{
    let {id} = req.params;
    let sql = `DELETE FROM foods WHERE id = ${id}`;
    koneksiDB.query(sql, (err, result)=>{
        if(err){
            res.send({
                msg: "DELETE DATA ID ERROR",
                status: 500,
                err,
            })
        }else{
            res.send({
                msg: "DELETE DATA ID SUCCESS",
                status:200,
                data: result
            })
        }
    })
})

//update
app.put("/api/food/:id", (req,res)=>{
    let {id} = req.body;
    let sql =  `update foods set nama_foods = '${req.body.nama_foods}', harga = '${req.body.harga}' where id = ${id}` ;
    koneksiDB.query(sql, (err, result)=>{
        if(err){
            res.send({
                msg: "update DATA ID ERROR",
                status: 500,
                err,
            })
        }else{
            res.send({
                msg: "update DATA ID SUCCESS",
                status:200,
                data: result
            })
        }
    })
})



app.listen(port ,()=>{
    console.log("server jalan" + port);
})