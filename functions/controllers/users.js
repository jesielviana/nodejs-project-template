/* eslint-disable class-methods-use-this */
const firebaseApp = require('../config/firebase');

class UsersController {
  constructor(User) {
    this.User = User;
    this.firestore = firebaseApp.firestore();
  }

  async get() {
    try {
      const users = [];
      await this.firestore
        .collection('users')
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.info(doc.id, '=>', doc.data());
            users.push(doc.data());
          });
        })
        .catch((err) => {
          console.error('Error getting documents', err);
        });
      return users;
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
      // this.firestore.collection('users').doc('id-created').set(userDTO);
      console.log('userDTO', userDTO);
      this.firestore.collection('users').add(userDTO);
    } catch (err) {
      console.error(err);
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

module.exports = UsersController;
