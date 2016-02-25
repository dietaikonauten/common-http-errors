/**
 * MIT
 *
 * Copyright (c) <2016> <Taikonauten GmbH>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @author Nicolas Traeder nt@taikonauten.com
 */

/**
 * A collection of the commons http errors for web-applications
 */
module.exports = {

  /**
   * creates a BadRequestError with statusCode 400
   * @param message
   * @returns {Error}
   */
  BadRequestError : function (message) {

    var BadRequestError = new Error(message);
    BadRequestError.name = 'BadRequestError';
    BadRequestError.statusCode = 400;
    return BadRequestError;
  },

  /**
   * creates a UnauthorizedError with statusCode 400
   * @param message
   * @returns {Error}
   */
  UnauthorizedError : function (message) {
    
    var UnauthorizedError = new Error(message);
    UnauthorizedError.name = 'UnauthorizedError';
    UnauthorizedError.statusCode = 401;
    return UnauthorizedError;
  },

  /**
   * creates a ForbiddenError with statusCode 403
   * @param message
   * @returns {Error}
   */
  ForbiddenError : function (message) {
    
    var ForbiddenError = new Error(message);
    ForbiddenError.name = 'ForbiddenError';
    ForbiddenError.statusCode = 403;
    return ForbiddenError;
  },

  /**
   * creates a NotFoundError with statusCode 404
   * @param message
   * @returns {Error}
   */
  NotFoundError : function (message) {

    var NotFoundError = new Error(message);
    NotFoundError.name = 'NotFoundError';
    NotFoundError.statusCode = 404;

    return NotFoundError;
  },

  /**
   * creates a NotAllowedError with statusCode 405
   * @param message
   * @returns {Error}
   */
  NotAllowedError : function (message) {
    
    var NotAllowedError = new Error(message);
    NotAllowedError.name = 'NotAllowedError';
    NotAllowedError.statusCode = 405;
    return NotAllowedError;
  },

  //SERVER ERRORS

  /**
   * creates a InternalServerError with statusCode 501
   * @param message
   * @returns {Error}
   */
  InternalServerError : function (message) {
    
    var InternalServerError = new Error(message);
    InternalServerError.name = 'InternalServerError';
    InternalServerError.statusCode = 500;
    return InternalServerError;
  },

  /**
   * creates a NotImplementedError with statusCode 501
   * @param message
   * @returns {Error}
   */
  NotImplementedError : function (message) {

    var NotImplementedError = new Error(message);
    NotImplementedError.name = 'NotImplementedError';
    NotImplementedError.statusCode = 501;
    return NotImplementedError;
  },

  /**
   * creates a BadGatewayError with statusCode 501
   * @param message
   * @returns {Error}
   */
  BadGatewayError : function (message) {

    var BadGatewayError = new Error(message);
    BadGatewayError.name = 'BadGatewayError';
    BadGatewayError.statusCode = 502;
    return BadGatewayError;
  }

};