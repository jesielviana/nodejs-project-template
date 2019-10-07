class User {
  constructor() {
    this.name = 'name';
    this.email = 'email';
  }

  get() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}
export default new User();
