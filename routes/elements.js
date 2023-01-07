import { Router } from 'express'
import * as elementsCtrl from '../controllers/elements.js'

const router = Router()

/* GET users listing. */
router.get('/', elementsCtrl.index)

router.get('/new', elementsCtrl.new)

router.get('/:abbr', elementsCtrl.show)

router.get('/:id/edit', elementsCtrl.edit)

router.post('/', elementsCtrl.create)

router.delete('/:id', elementsCtrl.delete)

export {
  router
}
