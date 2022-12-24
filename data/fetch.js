import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'


fetch("https://www.fishwatch.gov/api/species")
.then((res) => res.json())
.then((data) => fsPromises.writeFile("./data/fish.json", JSON.stringify(data)))

