/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
import sinon from 'sinon';
import UsersController from '../../../src/controllers/users';
import User from '../../../src/models/user';

describe('Controller: Users', () => {
  const defaultUser = [{
    __v: 0,
    _id: '56cb91bdc3464f14678934ca',
    name: 'Default User',
    email: 'email@email.com',
    password: '12345678',
  }];

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

      return usersController.get()
        .then((result) => {
          expect(result).to.eql(defaultUser);
        });
    });

    it.only('should return 400 when an error occurs', () => {
      User.find = sinon.stub();
      User.find.withArgs({}).rejects('Error400');

      const usersController = new UsersController(User);

      return usersController.get()
        .then(() => {
        }).catch((err) => {
          expect(err.message).to.eql('Error400');
        });
    });
  });

  describe('getById()', () => {
    it('should call send with one User', () => {
      const fakeId = 'a-fake-id';
      const request = {
        params: {
          id: fakeId,
        },
      };
      const response = {
        send: sinon.spy(),
      };

      User.findById = sinon.stub();
      User.findById.withArgs(fakeId, '_id name email').resolves(defaultUserExpected);

      const usersController = new UsersController(User);

      return usersController.getById(request, response)
        .then(() => {
          sinon.assert.calledWith(response.send, defaultUserExpected);
        });
    });
  });

  describe('create() User', () => {
    it('should call send with a new User', () => {
      const requestWithBody = { body: defaultUser[0], ...defaultRequest };
      const response = {
        send: sinon.spy(),
        status: sinon.stub(),
      };
      class fakeUser {
        save() {}
      }

      response.status.withArgs(201).returns(response);
      sinon.stub(fakeUser.prototype, 'save').withArgs().resolves();

      const usersController = new UsersController(fakeUser);

      return usersController.create(requestWithBody, response)
        .then(() => {
          sinon.assert.calledWith(response.send);
        });
    });

    context('when an error occurs', () => {
      it('should return 422', () => {
        const response = {
          send: sinon.spy(),
          status: sinon.stub(),
        };

        class fakeUser {
          save() { }
        }

        response.status.withArgs(422).returns(response);
        sinon.stub(fakeUser.prototype, 'save').withArgs().rejects({ message: 'Error' });

        const usersController = new UsersController(fakeUser);

        return usersController.create(defaultRequest, response)
          .then(() => {
            sinon.assert.calledWith(response.status, 422);
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
      const request = {
        params: {
          id: fakeId,
        },
        body: updatedUser,
      };
      const response = {
        sendStatus: sinon.spy(),
      };

      class fakeUser {
        static findOneAndUpdate() {}
      }

      const findOneAndUpdateStub = sinon.stub(fakeUser, 'findOneAndUpdate');
      findOneAndUpdateStub.withArgs({ _id: fakeId }, updatedUser).resolves(updatedUser);

      const usersController = new UsersController(fakeUser);

      return usersController.update(request, response)
        .then(() => {
          sinon.assert.calledWith(response.sendStatus, 200);
        });
    });

    context('when an error occurs', () => {
      it('should return 422', () => {
        const fakeId = 'a-fake-id';
        const updatedUser = {
          _id: fakeId,
          name: 'Updated User',
          description: 'Updated description',
          price: 150,
        };
        const request = {
          params: {
            id: fakeId,
          },
          body: updatedUser,
        };
        const response = {
          send: sinon.spy(),
          status: sinon.stub(),
        };

        class fakeUser {
          static findOneAndUpdate() {}
        }

        const findOneAndUpdateStub = sinon.stub(fakeUser, 'findOneAndUpdate');
        findOneAndUpdateStub.withArgs({ _id: fakeId }, updatedUser).rejects({ message: 'Error' });
        response.status.withArgs(422).returns(response);

        const usersController = new UsersController(fakeUser);

        return usersController.update(request, response)
          .then(() => {
            sinon.assert.calledWith(response.send, 'Error');
          });
      });
    });
  });

  describe('delete() User', () => {
    it('should respond with 204 when the User has been deleted', () => {
      const fakeId = 'a-fake-id';
      const request = {
        params: {
          id: fakeId,
        },
      };
      const response = {
        sendStatus: sinon.spy(),
      };

      class fakeUser {
        static deleteOne() {}
      }

      const removeStub = sinon.stub(fakeUser, 'deleteOne');

      removeStub.withArgs({ _id: fakeId }).resolves([1]);

      const usersController = new UsersController(fakeUser);

      return usersController.remove(request, response)
        .then(() => {
          sinon.assert.calledWith(response.sendStatus, 204);
        });
    });

    context('when an error occurs', () => {
      it('should return 400', () => {
        const fakeId = 'a-fake-id';
        const request = {
          params: {
            id: fakeId,
          },
        };
        const response = {
          send: sinon.spy(),
          status: sinon.stub(),
        };

        class fakeUser {
          static deleteOne() {}
        }

        const removeStub = sinon.stub(fakeUser, 'deleteOne');

        removeStub.withArgs({ _id: fakeId }).rejects({ message: 'Error' });
        response.status.withArgs(400).returns(response);

        const usersController = new UsersController(fakeUser);

        return usersController.remove(request, response)
          .then(() => {
            sinon.assert.calledWith(response.send, 'Error');
          });
      });
    });
  });
});
