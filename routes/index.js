import { Router } from 'express'
import fishRoutes from './fish.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('Api root')
})

router.use('/fish', fishRoutes)

export default router;