import { Element } from '../models/element.js'

function index(req, res) {
  Element.find({})
  .then(elements => {
    res.render('elements', {
      elements: elements
    })
  })
  .catch(error => {
    console.log(error);
    res.redirect('/')
  })
}

export {
  index
}