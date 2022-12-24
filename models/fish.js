import mongoose from 'mongoose'

const Schema = mongoose.Schema

const fishSchema = new Schema({
    "Species Name": String,
    "Habitat": String,
    "Location": String,
    "Physical Description": String,
    "Color": String,
    "Population": String,
    "Population Status": String,

})

export default mongoose.model('fishes', fishSchema)