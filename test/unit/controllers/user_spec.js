/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
import sinon from 'sinon';
import UsersController from '../../../src/controllers/users';
import User from '../../../src/models/user';

describe('Controller: Users', () => {
  const defaultUser = [
    {
      __v: 0,
      _id: '56cb91bdc3464f14678934ca',
      name: 'Default User',
      email: 'email@email.com',
      password: '12345678',
    },
  ];

  const defaultUserExpected = {
    _id: '56cb91bdc3464f14678934ca',
    name: 'Default User',
    email: 'email@email.com',
  };

  describe('get() Users', () => {
    it('should call send with a list of Users', () => {
      User.find = sinon.stub();

      User.find.withArgs({}).resolves(defaultUser);

      const usersController = new UsersController(User);

      return usersController.get().then((result) => {
        expect(result).to.eql(defaultUser);
      });
    });

    it('should return 400 when an error occurs', () => {
      User.find = sinon.stub();
      User.find.withArgs({}).rejects('Error400');

      const usersController = new UsersController(User);

      return usersController
        .get()
        .then(() => {})
        .catch((err) => {
          expect(err.message).to.eql('Error400');
        });
    });
  });

  describe('getById()', () => {
    it('should call send with one User', () => {
      const fakeId = 'a-fake-id';

      User.findById = sinon.stub();
      User.findById.withArgs(fakeId, '_id name email').resolves(defaultUserExpected);

      const usersController = new UsersController(User);

      return usersController.getById(fakeId).then((result) => {
        expect(result).to.eql(defaultUserExpected);
      });
    });
  });

  describe('create() User', () => {
    it('should call send with a new User', () => {
      class fakeUser {
        save() {}
      }

      sinon
        .stub(fakeUser.prototype, 'save')
        .withArgs()
        .resolves();

      const usersController = new UsersController(fakeUser);

      return usersController.create(defaultUser).then((result) => {
        expect(result).to.eql(undefined);
      });
    });

    context('when an error occurs', () => {
      it('should return 400', () => {
        class fakeUser {
          save() {}
        }

        sinon
          .stub(fakeUser.prototype, 'save')
          .withArgs()
          .rejects('Error400');

        const usersController = new UsersController(fakeUser);

        return usersController
          .create(defaultUser)
          .then(() => {})
          .catch((err) => {
            expect(err.message).to.eql('Error400');
          });
      });
    });
  });

  describe('update() User', () => {
    it('should respond with 200 when the User has been updated', () => {
      const fakeId = 'a-fake-id';
      const updatedUser = {
        _id: fakeId,
        nome: 'Default User',
        email: 'novo@email.com',
      };

      class fakeUser {
        static findOneAndUpdate() {}
      }

      const findOneAndUpdateStub = sinon.stub(fakeUser, 'findOneAndUpdate');
      findOneAndUpdateStub.withArgs({ _id: fakeId }, updatedUser).resolves(updatedUser);

      const usersController = new UsersController(fakeUser);

      return usersController.update(fakeId, updatedUser).then((result) => {
        expect(result).to.eql(undefined);
      });
    });

    context('when an error occurs', () => {
      it('should return 400', () => {
        const fakeId = 'a-fake-id';
        const updatedUser = {
          _id: fakeId,
          name: 'Updated User',
          email: 'Updated email',
        };

        class fakeUser {
          static findOneAndUpdate() {}
        }

        const findOneAndUpdateStub = sinon.stub(fakeUser, 'findOneAndUpdate');
        findOneAndUpdateStub.withArgs({ _id: fakeId }, updatedUser).rejects('Error400');

        const usersController = new UsersController(fakeUser);

        return usersController
          .update(fakeId, updatedUser)
          .then(() => {})
          .catch((err) => {
            expect(err.message).to.eql('Error400');
          });
      });
    });
  });

  describe('delete() User', () => {
    it('should respond with 200 when the User has been deleted', () => {
      const fakeId = 'a-fake-id';

      class fakeUser {
        static deleteOne() {}
      }

      const removeStub = sinon.stub(fakeUser, 'deleteOne');

      removeStub.withArgs({ _id: fakeId }).resolves([1]);

      const usersController = new UsersController(fakeUser);

      return usersController
        .remove(fakeId)
        .then(() => {})
        .catch((err) => {
          expect(err.message).to.eql('Error400');
        });
    });

    context('when an error occurs', () => {
      it('should return 400', () => {
        const fakeId = 'a-fake-id';

        class fakeUser {
          static deleteOne() {}
        }

        const removeStub = sinon.stub(fakeUser, 'deleteOne');

        removeStub.withArgs({ _id: fakeId }).rejects('Error400');

        const usersController = new UsersController(fakeUser);

        return usersController
          .remove(fakeId)
          .then(() => {})
          .catch((err) => {
            expect(err.message).to.eql('Error400');
          });
      });
    });
  });
});
