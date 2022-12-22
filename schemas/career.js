const { Schema, model} = require("mongoose");

// Creates a new Schema for database document to reference on creation
const careerSchema = new Schema({ 
    _id: Schema.Types.ObjectId, // Obtains the ObjectId property, as it is a required field by MongoDB
    userId: String,
    battletag: String
})

// Exports the Schema for use in other files
module.exports = model ("career", careerSchema, "accounts")