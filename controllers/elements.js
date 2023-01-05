import {elements} from '../data/element-data.js'

function index(req, res) {
  res.render('elements', {
    elements: elements
  })
}

export {
  index
}