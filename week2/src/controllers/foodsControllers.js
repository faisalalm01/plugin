const {foods} = require("../models/");

module.exports = {
    getAllFoods : (req, res)=>{
        foods.findAll()
        .then((data)=>{

            res.send({
                msg: "succes",
                status: 200,
                data
            })
        })
        .catch ((err)=>{
            res.send({
                msg: 'erros',
                status:500,
                err,
            })
        })
    },
    postFoods : (req, res)=>{
        let{body} = req;
        foods.create(body)
        .then((data)=>{
            res.status(200).send({
                msg: "succes post data",
                status : 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'failed get data',
                status: 500,
                err,
            })
        })
    },
    getDataById :(req,res)=>{
        let{ id }=req.params;
        foods.findOne({
            where : {id},
        })
        .then ((data)=>{
            res.status(200).send({
                msg: 'succes get data By Id',
                status:200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'failed while get data where By Id',
                status: 500,
                err,
            })
        })
    },
    //delete
    deleteDataById :(req, res)=>{
        let{id}=req.params;
        foods.destroy({
            where : {id},
        })
        .then((data)=>{
            res.status(200).send({
                msg: 'succes delete data by id',
                status: 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'failed delete data by id',
                status: 590,
                err,
            })
        })
    },
    //put
    putDataById: (req, res)=>{
        let{id}=req.params;
        let{body}=req;
        foods.update(body,{
            where:{id}
        })
        .then((data)=>{
            res.status(200).send({
                msg: 'succes edit data by id',
                status: 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'failed edit data by id',
                msg: 500,
                err,
            })
        })
    }

}