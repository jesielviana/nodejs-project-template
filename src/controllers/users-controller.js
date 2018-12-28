class UsuariosController {
  constructor(Usuario) {
    this.Usuario = Usuario;
  };

  get(req, res) {
    return this.Usuario.find({})
      .then(Usuarios => res.send(Usuarios))
      .catch(err => res.status(400).send(err.message));
  }

  getById(req, res) {
    const { params: { id } } = req;

    return this.Usuario.find({ _id: id })
      .then(Usuarios => res.send(Usuarios))
      .catch(err => res.status(400).send(err.message));
  }

  create(req, res) {
    const Usuario = new this.Usuario(req.body);

    return Usuario.save()
      .then(() => res.status(201).send(Usuario))
      .catch(err => res.status(422).send(err.message));
  }

  update(req, res) {
    return this.Usuario.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(422).send(err.message));
  }

  remove(req, res) {
    return this.Usuario.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(204))
      .catch(err => res.status(400).send(err.message));
  }
}

export default UsuariosController;
