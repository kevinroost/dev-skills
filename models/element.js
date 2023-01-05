import mongoose from 'mongoose'

const Schema = mongoose.Schema
	
const elementSchema = new Schema({
  abbr: String,
  fullName: String,
  weight: Number,
  number: Number,
})

const Element = mongoose.model('Element', elementSchema)

export {
  Element
}