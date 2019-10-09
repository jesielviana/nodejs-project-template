class User {
  constructor() {
    this.name = 'name';
    this.email = 'email';
  }

  get() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}
module.exports = new User();
