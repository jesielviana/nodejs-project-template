class UsersController {
  constructor(User) {
    this.User = User;
  }

  async get() {
    try {
      return `Get ${this.User}`;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getById(id) {
    try {
      return `Get id ${this.User} ${id}`;
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(userDTO) {
    try {
      return `Post ${this.User} ${userDTO}`;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id, userDTO) {
    try {
      return `Put ${this.User} ${id} ${userDTO}`;
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id) {
    try {
      return `Delete ${this.User} ${id}`;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default UsersController;
