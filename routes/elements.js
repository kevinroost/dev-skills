import { Router } from 'express'
import * as elementsCtrl from '../controllers/elements.js'

const router = Router()

/* GET users listing. */
router.get('/', elementsCtrl.index)

export {
  router
}
