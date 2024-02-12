const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Commandeschema = new schema({
  nameuser: { 
    type: String,
    
  },
  Iduser: {
    type: String,
  },
  nomprduit: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  quantite: {
    type: Number,
    default:1
  },
});

module.exports = commande = mongoose.model("commande", Commandeschema);
