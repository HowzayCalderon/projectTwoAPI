import mongoose from 'mongoose'
import connection from '../connection.js'
import fishes from '../models/fish.js'
import data from '../data/fish.json' assert {type: 'json'}


let fishData = data.map(item => {
    const fis = {};

    fis["Species Name"] = item["Species Name"];
    fis["Habitat"] = item["Habitat"];
    fis["location"] = item['location'];
    fis["Physical Description"] = item["Physical Description"];
    fis["Color"] = item["Color"];
    fis["Population"] = item["Population"];
    fis['Population Status'] = item['Population Status'];
    console.log(item['Species Name'])
    return fis
})

let insertData = async () => {
    await fishes.deleteMany({})
    await fishes.create(fishData)
    await console.log("It's finished")
    mongoose.disconnect()
}
insertData()

