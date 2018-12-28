import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  nome: String,
  alteracao: { type: Date, default: Date.now },
});
const Usuario = mongoose.model('Usuario', schema);

export default Usuario;
