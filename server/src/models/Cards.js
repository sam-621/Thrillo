import { model, Schema } from 'mongoose';

const cardSchema = new Schema({
  idBoard: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const Card = model('cards', cardSchema);

export default Card;
