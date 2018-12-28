import UsuariosController from '../../../src/controllers/usuarios';
import sinon from 'sinon';
import Usuario from '../../../src/models/usuario';

describe('Controller: Usuarios', () => {
  const defaultUsuario = [{
    __v: 0,
    _id: '56cb91bdc3464f14678934ca',
    nome: 'Default usuario',
    cpf: '12345678901',
    dataNascimento: new Date('01.02.2012'),
  }];

  const defaultRequest = {
    params: {},
  };

  describe('get() usuarios', () => {
    it('should call send with a list of usuarios', () => {
      const response = {
        send: sinon.spy(),
      };
      Usuario.find = sinon.stub();

      Usuario.find.withArgs({}).resolves(defaultUsuario);

      const usuariosController = new UsuariosController(Usuario);

      return usuariosController.get(defaultRequest, response)
        .then(() => {
          sinon.assert.calledWith(response.send, defaultUsuario);
        });
    });

    it('should return 400 when an error occurs', () => {
      const request = {};
      const response = {
        send: sinon.spy(),
        status: sinon.stub(),
      };

      response.status.withArgs(400).returns(response);
      Usuario.find = sinon.stub();
      Usuario.find.withArgs({}).rejects({ message: 'Error' });

      const usuariosController = new UsuariosController(Usuario);

      return usuariosController.get(request, response)
        .then(() => {
          sinon.assert.calledWith(response.send, 'Error');
        });
    });
  });

  describe('getById()', () => {
    it('should call send with one usuario', () => {
      const fakeId = 'a-fake-id';
      const request = {
        params: {
          id: fakeId,
        },
      };
      const response = {
        send: sinon.spy(),
      };

      Usuario.find = sinon.stub();
      Usuario.find.withArgs({ _id: fakeId }).resolves(defaultUsuario);

      const usuariosController = new UsuariosController(Usuario);

      return usuariosController.getById(request, response)
        .then(() => {
          sinon.assert.calledWith(response.send, defaultUsuario);
        });
    });
  });

  describe('create() usuario', () => {
    it('should call send with a new usuario', () => {
      const requestWithBody = Object.assign({}, { body: defaultUsuario[0] }, defaultRequest);
      const response = {
        send: sinon.spy(),
        status: sinon.stub(),
      };
      class fakeUsuario {
        save() {}
      }

      response.status.withArgs(201).returns(response);
      sinon.stub(fakeUsuario.prototype, 'save').withArgs().resolves();

      const usuariosController = new UsuariosController(fakeUsuario);

      return usuariosController.create(requestWithBody, response)
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

        class fakeUsuario {
          save() {}
        }

        response.status.withArgs(422).returns(response);
        sinon.stub(fakeUsuario.prototype, 'save').withArgs().rejects({ message: 'Error' });

        const usuariosController = new UsuariosController(fakeUsuario);

        return usuariosController.create(defaultRequest, response)
          .then(() => {
            sinon.assert.calledWith(response.status, 422);
          });
      });
    });
  });

  describe('update() usuario', () => {
    it('should respond with 200 when the usuario has been updated', () => {
      const fakeId = 'a-fake-id';
      const updatedUsuario = {
        _id: fakeId,
        nome: 'Default usuario',
        cpf: 'usuario description',
        dataNascimento: new Date('01.02.2012'),
      };
      const request = {
        params: {
          id: fakeId,
        },
        body: updatedUsuario,
      };
      const response = {
        sendStatus: sinon.spy(),
      };

      class fakeUsuario {
        static findOneAndUpdate() {}
      }

      const findOneAndUpdateStub = sinon.stub(fakeUsuario, 'findOneAndUpdate');
      findOneAndUpdateStub.withArgs({ _id: fakeId }, updatedUsuario).resolves(updatedUsuario);

      const usuariosController = new UsuariosController(fakeUsuario);

      return usuariosController.update(request, response)
        .then(() => {
          sinon.assert.calledWith(response.sendStatus, 200);
        });
    });

    context('when an error occurs', () => {
      it('should return 422', () => {
        const fakeId = 'a-fake-id';
        const updatedUsuario = {
          _id: fakeId,
          name: 'Updated usuario',
          description: 'Updated description',
          price: 150,
        };
        const request = {
          params: {
            id: fakeId,
          },
          body: updatedUsuario,
        };
        const response = {
          send: sinon.spy(),
          status: sinon.stub(),
        };

        class fakeUsuario {
          static findOneAndUpdate() {}
        }

        const findOneAndUpdateStub = sinon.stub(fakeUsuario, 'findOneAndUpdate');
        findOneAndUpdateStub.withArgs({ _id: fakeId }, updatedUsuario).rejects({ message: 'Error' });
        response.status.withArgs(422).returns(response);

        const usuariosController = new UsuariosController(fakeUsuario);

        return usuariosController.update(request, response)
          .then(() => {
            sinon.assert.calledWith(response.send, 'Error');
          });
      });
    });
  });

  describe('delete() usuario', () => {
    it('should respond with 204 when the usuario has been deleted', () => {
      const fakeId = 'a-fake-id';
      const request = {
        params: {
          id: fakeId,
        },
      };
      const response = {
        sendStatus: sinon.spy(),
      };

      class fakeUsuario {
        static remove() {}
      }

      const removeStub = sinon.stub(fakeUsuario, 'remove');

      removeStub.withArgs({ _id: fakeId }).resolves([1]);

      const usuariosController = new UsuariosController(fakeUsuario);

      return usuariosController.remove(request, response)
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

        class fakeUsuario {
          static remove() {}
        }

        const removeStub = sinon.stub(fakeUsuario, 'remove');

        removeStub.withArgs({ _id: fakeId }).rejects({ message: 'Error' });
        response.status.withArgs(400).returns(response);

        const usuariosController = new UsuariosController(fakeUsuario);

        return usuariosController.remove(request, response)
          .then(() => {
            sinon.assert.calledWith(response.send, 'Error');
          });
      });
    });
  });
});
