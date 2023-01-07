import { elements } from '../data/element-data.js';
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
    res.redirect('/elements')
  })
}

function newElement(req, res) {
  res.render('elements/new')
}

function show(req, res) {
  console.log(req.params.abbr);
  Element.find({abbr: req.params.abbr})
  .then(element => {
    res.render('elements/show', {
      element: element[0]
      })
    console.log(element);
  })
  .catch(error => {
    console.log(error);
    res.redirect('/elements')
  })
}

function create(req, res) {
  Element.create(req.body)
  .then(
    res.redirect('/elements')
  )
  .catch(error => {
    console.log(error);
    res.redirect('/elements')
  })
}

function deleteElement(req, res) {
  console.log(req.params);
  Element.findByIdAndDelete(req.params.id)
  .then(element => {
    res.redirect('/elements')
  })
  .catch(error => {
    console.log(error);
    res.redirect('/elements')
  })
}

function edit(req, res) {
  console.log('edit works');
  Element.findById(req.params.id)
  .then(element => {
    res.render(`elements/edit`)
  })
  .catch(error => {
    console.log(error);
    res.redirect('/elements')
  })
}

export {
  index,
  newElement as new,
  create,
  show,
  deleteElement as delete,
  edit,
}