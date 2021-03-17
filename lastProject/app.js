const express = require('express');
const app = express()
const path = require ('path')
const bodyParser = require('body-parser')

const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'lastProject'
    
})

connection.connect((error)=>{
    if(error)throw error
    console.log('database succes');
})

app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.listen(3001,()=>{
    console.log('jalan');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/',(req, res)=>{
    let sql = 'select * from tb_pelajar';
    connection.query(sql,(error,data)=>{
        if(error){
            console.log('ada yang error di' + error);
        }else{
            res.render('user_index',{
                title : 'crud express',
                users : data
            })
            console.log(data);
        }
    })

})

app.get('/science', function (req, res){
    let sql = 'select * from tb_pelajar where id_kelas = 1';
    connection.query(sql,(error,data)=>{
        if(error){
            console.log('ada yang error di' + error);
        }else{
            res.render('science',{
                title : 'crud express',
                ipa : data
            })
            console.log(data);
        }
    })

})

app.get('/social', function (req, res){
    let sql = 'select * from tb_pelajar where id_kelas = 2';
    connection.query(sql,(error,data)=>{
        if(error){
            console.log('ada yang error di' + error);
        }else{
            res.render('social',{
                title : 'crud express',
                ips : data
            })
            console.log(data);
        }
    })

})

app.get('/math', function (req, res){
    let sql = 'select * from tb_pelajar where id_kelas = 3';
    connection.query(sql,(error,data)=>{
        if(error){
            console.log('ada yang error di' + error);
        }else{
            res.render('math',{
                title : 'crud express',
                mate : data
            })
            console.log(data);
        }
    })
})

//add
app.get('/add', (req, res)=>{
    res.render('user_add',{
        tite : 'add_data'
    })
})

app.get('/add_science', (req, res)=>{
    res.render('user_add_science',{
        tite : 'add_data_science'
    })
})

app.get('/add_social', (req, res)=>{
    res.render('user_add_social',{
        tite : 'add_data_social'
    })
})

app.get('/add_math', (req, res)=>{
    res.render('user_add_math',{
        tite : 'add_data_math'
    })
})

//save
app.post('/save', (req, res)=>{
    let data = {
        nip : req.body.nip,
        nama: req.body.nama,
        id_kelas : req.body.id_kelas
    }
    console.log(data);
    let sql = "INSERT INTO tb_pelajar SET ? ";
    let query = connection.query(sql,data,(error, result)=>{
        if(error)throw error;
        res.redirect('/');
    })
})

app.post('/saveipa', (req, res)=>{
    let data = {
        nim : req.body.nip,
        nama: req.body.nama,
        kelas : req.body.id_kelas
    }
    console.log(data);
    let sql = "INSERT INTO tb_kelas where id = 1 SET ? ";
    let query = connection.query(sql,data,(error, result)=>{
        if(error)throw error;
        res.redirect('/science');
    })
})

app.post('/saveips', (req, res)=>{
    let data = {
        nim : req.body.nim,
        nama: req.body.nama,
        kelas : req.body.kelas
    }
    console.log(data);
    let sql = "INSERT INTO kls_ips SET ? ";
    let query = connection.query(sql,data,(error, result)=>{
        if(error)throw error;
        res.redirect('/social');
    })
})

app.post('/savemate', (req, res)=>{
    let data = {
        nim : req.body.nim,
        nama: req.body.nama,
        kelas : req.body.kelas
    }
    console.log(data);
    let sql = "INSERT INTO kls_math SET ? ";
    let query = connection.query(sql,data,(error, result)=>{
        if(error)throw error;
        res.redirect('/math');
    })
})

//edit
app.get('/edit/:userId',(req, res)=>{
    const userId = req.params.userId
    let sql = `select * from tb_pelajar where id = ${userId}`
    let query = connection.query(sql,(error, result)=>{
        if(error)throw error;
        res.render('user_edit',{
            users : result[0]
        })
    })
})

app.get('/edit_ipa/:scienceId',(req, res)=>{
    const scienceId = req.params.scienceId
    let sql = `select * from kls_ipa where id = ${scienceId}`
    let query = connection.query(sql,(error, result)=>{
        if(error)throw error;
        res.render('user_edit_science',{
            ipa : result[0]
        })
    })
})

app.get('/edit_ips/:socialId',(req, res)=>{
    const socialId = req.params.socialId
    let sql = `select * from kls_ips where id = ${socialId}`
    let query = connection.query(sql,(error, result)=>{
        if(error)throw error;
        res.render('user_edit_social',{
            ips : result[0]
        })
    })
})

app.get('/edit_mate/:mathId',(req, res)=>{
    const mathId = req.params.mathId
    let sql = `select * from kls_math where id = ${mathId}`
    let query = connection.query(sql,(error, result)=>{
        if(error)throw error;
        res.render('user_edit_math',{
            mate : result[0]
        })
    })
})

// update
app.post('/update', (req, res)=>{
    const userId = req.body.id;
    let sql = `update tb_pelajar set nip = '${req.body.nip}', nama = '${req.body.nama}', id_kelas = '${req.body.id_kelas}' where id = ${userId}`;
    let query = connection.query(sql,(error,result)=>{
        if(error)throw error;
        res.redirect('/')
    })
})

app.post('/update_ipa', (req, res)=>{
    const scienceId = req.body.id;
    let sql = `update kls_ipa set nim = '${req.body.nim}', nama = '${req.body.nama}', kelas = '${req.body.kelas}' where id = ${scienceId}`;
    let query = connection.query(sql,(error,result)=>{
        if(error)throw error;
        res.redirect('/science')
    })
})

app.post('/update_ips', (req, res)=>{
    const socialId = req.body.id;
    let sql = `update kls_ips set nim = '${req.body.nim}',nama = '${req.body.nama}', kelas = '${req.body.kelas}' where id = ${socialId}`;
    let query = connection.query(sql,(error,result)=>{
        if(error)throw error;
        res.redirect('/social')
    })
})


app.post('/update_mate', (req, res)=>{
    const mathId = req.body.id;
    let sql = `update kls_math set nim = '${req.body.nim}', nama = '${req.body.nama}', kelas = '${req.body.kelas}' where id = ${mathId}`;
    let query = connection.query(sql,(error,result)=>{
        if(error)throw error;
        res.redirect('/math')
    })
})

//delete
app.get('/delete/:userId',(req, res)=>{
    const userId = req.params.userId;
    let sql = `delete from tb_pelajar where id = '${userId}'`;
    let query = connection.query(sql,(error, result)=>{
        if(error)throw error;
        res.redirect('/')
    
    })
})

app.get('/delete_ipa/:scienceId',(req, res)=>{
    const scienceId = req.params.scienceId;
    let sql = `delete from kls_ipa where id = '${scienceId}'`;
    let query = connection.query(sql,(error, result)=>{
        if(error)throw error;
        res.redirect('/science')
    })

})

app.get('/delete_ips/:socialId', (req, res)=>{
    const socialId = req.params.socialId;
    let sql = `delete from kls_ips where id = '${socialId}'`
    let querry = connection.query(sql, (error, result)=>{
        if(error)throw error;
        res.redirect('/social')
    })
})

app.get('/delete_mate/:mathId', (req, res)=>{
    const mathId = req.params.mathId;
    let sql = `delete from kls_math where id = '${mathId}'`
    let querry = connection.query(sql, (error, result)=>{
        if(error)throw error;
        res.redirect('/math')
    })
})