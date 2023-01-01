import fishes from '../models/fish.js'

export const getFishies = async (req, res) => {
    try {
        const fish = await fishes.find()
        res.json(fish)
    }catch (error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
}

export const getFish = async (req, res) => {
    try{
        const { id } = req.params;
    const fishies = await fishes.findById(id);

    if(fishies){
        return res.json(fishies)
    }
    res.status(404).json({message: "Character not found"})
    }catch (error){
        console.error(error);
        res.status(500).json({error: error.message})
    }
};

export const createFish = async (req, res) => {
    try{
        const fish = new fishes(req.body)
        await fish.save();
        res.status(201).json(fish);
    }catch (error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
}

export const updateFish = async (req, res) => {
    try{
        const {id} = req.params;
        const fish = await fishes.findByIdAndUpdate(id, req.body);
        res.status(201).json(fish);
    }catch (error){
        console.error(error);
        res.status(500).json({error: error.message})
    }
}

export const deleteFish = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await fishes.findByIdAndDelete(id);

        if (deleted) {
            return res.status(200).send("Fish deleted!");
        }
        throw new Error("Fish not found!")
    }catch (error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
}