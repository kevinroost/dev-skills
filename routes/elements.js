import { Router } from 'express'
import * as elementsCtrl from '../controllers/elements.js'

const router = Router()

/* GET users listing. */
router.get('/', elementsCtrl.index)

router.get('/new', elementsCtrl.new)

router.get('/:abbr', elementsCtrl.show)

router.post('/', elementsCtrl.create)

export {
  router
}
