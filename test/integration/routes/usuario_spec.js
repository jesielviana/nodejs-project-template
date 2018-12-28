/* global setupApp supertest expect */

import Usuario from '../../../src/models/usuario';

describe('Routes: Usuarios', () => {
  let request;

  before(() => setupApp()
    .then((app) => {
      request = supertest(app);
    }));

  const defaultId = '56cb91bdc3464f14678934ca';
  const defaulAlteracao = new Date().toISOString();

  const defaultUsuario = {
    nome: 'Default usuario',
    alteracao: defaulAlteracao,
  };
  const expectedUsuario = {
    __v: 0,
    _id: defaultId,
    nome: 'Default usuario',
    alteracao: defaulAlteracao,
  };

  beforeEach(() => {
    const usuario = new Usuario(defaultUsuario);
    usuario._id = '56cb91bdc3464f14678934ca';
    return Usuario.deleteMany({})
      .then(() => usuario.save());
  });

  afterEach(() => Usuario.deleteMany({}));

  after(() => process.exit());

  describe('GET /usuarios', () => {
    it('should return a list of usuarios', (done) => {
      request
        .get('/usuarios')
        .end((err, res) => {
          expect(res.body).to.eql([expectedUsuario]);
          done(err);
        });
    });

    context('when an id is specified', () => {
      it('should return 200 with one usuario', (done) => {
        request
          .get(`/usuarios/${defaultId}`)
          .end((err, res) => {
            expect(res.statusCode).to.eql(200);
            expect(res.body).to.eql([expectedUsuario]);
            done(err);
          });
      });
    });
  });

  describe('POST /usuarios', () => {
    context('when posting a usuario', () => {
      it('should return a new usuario with status code 201', (done) => {
        const customId = '56cb91bdc3464f14678934ba';
        const newUsuario = Object.assign({}, { _id: customId, __v: 0 }, defaultUsuario);
        const expectedSavedUsuario = {
          __v: 0,
          _id: customId,
          nome: 'Default usuario',
          alteracao: defaulAlteracao,
        };

        request
          .post('/usuarios')
          .send(newUsuario)
          .end((err, res) => {
            expect(res.statusCode).to.eql(201);
            expect(res.body).to.eql(expectedSavedUsuario);
            done(err);
          });
      });
    });
  });

  describe('PUT /usuarios/:id', () => {
    context('when editing a usuario', () => {
      it('should update the usuario and return 200 as status code', (done) => {
        const customUsuario = {
          name: 'Custom name',
        };
        const updatedUsuario = Object.assign({}, customUsuario, defaultUsuario);

        request
          .put(`/usuarios/${defaultId}`)
          .send(updatedUsuario)
          .end((err, res) => {
            expect(res.status).to.eql(200);
            done(err);
          });
      });
    });
  });

  describe('DELETE /usuarios/:id', () => {
    context('when deleting a usuario', () => {
      it('should delete a usuario and return 204 as status code', (done) => {
        request
          .delete(`/usuarios/${defaultId}`)
          .end((err, res) => {
            expect(res.status).to.eql(204);
            done(err);
          });
      });
    });
  });
});
