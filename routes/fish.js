import { Router } from 'express'
import * as controllers from "../controllers/fish.js"

const router = Router();

router.get('/', controllers.getFishies);
router.get('/:id', controllers.getFish)
router.post('/', controllers.createFish)
router.put('/:id', controllers.updateFish)
router.delete('/:id', controllers.deleteCharacter)

export default router;