const express=require('express')
const commandeRouter=express.Router()
const commande=require('../models/Commande')
//add new commande
commandeRouter.post('/add',async(req,res)=>{
    try {
const newcommande=new commande (req.body)
const result= await newcommande.save()
       res.send(({commandejdid:result,msg:"commande is saved "})) 
    } catch (error) {
        console.log(error)
        
    }

});
//get  all  commande
commandeRouter.get("/all", async (req, res) => {
    try {
      let result = await commande.find();
      res.send({ lists: result, msg: "voici list commande" });
    } catch (error) {
      console.log(error);
    }
  })
  //get commande by id
commandeRouter.get("/:id", async (req, res) => {
    try {
      let result = await commande.findById({ _id: req.params.id });
      res.send({ hahi: result, msg: "voici commande" });
    } catch (error) {
      console.log(error);
    }
  });
  //delete commande
  
  commandeRouter.delete("/:id", async (req, res) => {
    try {
      let result = await commande.findByIdAndDelete({ _id: req.params.id });
      res.send({ msg: "commande is deleted" });
    } catch (error) {
      console.log(error);
    }
  });
  //update commande 
commandeRouter.put("/:id", async (req, res) => {
    try {
      let result = await commande.findByIdAndUpdate(
        { _id: req.params.id },
        {$set:{...req.body}}
      );
      res.send({msg: "commande is updated" });
    } catch (error) {
      console.log(error);
    }
  });




module.exports=commandeRouter