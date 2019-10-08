/* eslint-disable class-methods-use-this */
import firebaseApp from '../config/firebase';

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
      const docRef = this.firestore.collection('users').doc(userDTO.first + userDTO.last);
      docRef.set(userDTO);
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

export default UsersController;
