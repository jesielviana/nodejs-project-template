class UsersController {
  constructor(User) {
    this.User = User;
  }

  async get() {
    try {
      return await this.User.find({}, '_id name email');
    } catch (err) {
      throw new Error(err);
    }
  }

  async getById(id) {
    try {
      return await this.User.findById(id, '_id name email');
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(userDTO) {
    try {
      const user = new this.User(userDTO);
      await user.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id, userDTO) {
    try {
      await this.User.findOneAndUpdate({ _id: id }, userDTO);
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id) {
    try {
      await this.User.deleteOne({ _id: id });
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UsersController;
