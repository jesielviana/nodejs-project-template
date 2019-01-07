class UsersController {
  constructor(User) {
    this.User = User;
  }

  async get(req, res) {
    try {
      const users = await this.User.find({}, '_id name email');
      res.send(users);
    } catch (err) {
      console.error(err);
      res.status(400).send('Error');
    }
  }

  async getById(req, res) {
    const { params: { id } } = req;
    try {
      const user = await this.User.findById(id, '_id name email');
      res.send(user);
    } catch (err) {
      console.error(err);
      res.status(400).send('Error');
    }
  }

  create(req, res) {
    const user = new this.User(req.body);
    return user.save()
      .then(() => res.status(201).send('Success'))
      .catch((err) => {
        console.error(err);
        res.status(422).send(err.message);
      });
  }

  update(req, res) {
    return this.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(422).send(err.message));
  }

  remove(req, res) {
    return this.User.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(204))
      .catch(err => res.status(400).send(err.message));
  }
}

export default UsersController;
