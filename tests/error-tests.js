/**
 * @author Nicolas Traeder nt@taikonauten.com
 */
var expect = require('chai').expect;

/**
 * unit under test
 */
var HttpErrors = require('./../index');

describe('Common-Http-Errors', function () {

  describe('Module Export', function () {

    it('should be a object', function (done) {

      expect(HttpErrors).to.be.a('object');
      expect(Object.keys(HttpErrors).length).to.not.equal(0);

      done();
    });
  });

  describe('BadRequestError', function () {

    it('should have name BadRequest and statusCode 400', function (done) {

      var error = HttpErrors.BadRequestError('Error message');

      expect(error.name).to.equal('BadRequestError');
      expect(error.statusCode).to.equal(400);

      done();
    });

  });

  describe('UnauthorizedError', function () {

    it('should have name UnauthorizedError and statusCode 401', function (done) {

      var error = HttpErrors.UnauthorizedError('Error message');

      expect(error.name).to.equal('UnauthorizedError');
      expect(error.statusCode).to.equal(401);

      done();
    });

  });

  describe('ForbiddenError', function () {

    it('should have name ForbiddenError and statusCode 403', function (done) {

      var error = HttpErrors.ForbiddenError('Error message');

      expect(error.name).to.equal('ForbiddenError');
      expect(error.statusCode).to.equal(403);

      done();
    });

  });

  describe('NotFoundError', function () {

    it('should have name NotFoundError and statusCode 404', function (done) {

      var error = HttpErrors.NotFoundError('Error message');

      expect(error.name).to.equal('NotFoundError');
      expect(error.statusCode).to.equal(404);

      done();
    });

  });

  describe('NotAllowedError', function () {

    it('should have name NotAllowedError and statusCode 405', function (done) {

      var error = HttpErrors.NotAllowedError('Error message');

      expect(error.name).to.equal('NotAllowedError');
      expect(error.statusCode).to.equal(405);

      done();
    });

  });

  describe('InternalServerError', function () {

    it('should have name InternalServerError and statusCode 500', function (done) {

      var error = HttpErrors.InternalServerError('Error message');

      expect(error.name).to.equal('InternalServerError');
      expect(error.statusCode).to.equal(500);

      done();
    });

  });

  describe('NotImplementedError', function () {

    it('should have name NotImplementedError and statusCode 501', function (done) {

      var error = HttpErrors.NotImplementedError('Error message');

      expect(error.name).to.equal('NotImplementedError');
      expect(error.statusCode).to.equal(501);

      done();
    });

  });

  describe('BadGatewayError', function () {

    it('should have name BadGatewayError and statusCode 502', function (done) {

      var error = HttpErrors.BadGatewayError('Error message');

      expect(error.name).to.equal('BadGatewayError');
      expect(error.statusCode).to.equal(502);

      done();
    });

  });


});