# common-http-errors

A collection of common http errors for any web-application. The following errors are included:

**Client errors**

* BadRequestError
* UnauthorizedError
* ForbiddenError
* NotFoundError
* NotAllowedError

**Server errors**

* InternalServerError
* NotImplementedError
* BadGatewayError

## Example 

Here a little example with expressjs

```javascript

const express = require('express');
const HttpErrors = require('common-http-errors');
let app = express();

app.use('/', function(req, res, next) {

    if(!req.query.search) {
        return next(HttpErrors.BadRequestError('Please provide a search query parameter'));
    }
    
    res.send("Search: " + req.query.search);

});

app.use(function(err, req, res, next) {
    
    //handle error here

});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
  debug('Test Server running on: ' + server.address().port);
});
```


## Contributors

Nicolas Traeder - nt@taikonauten.com

## License (MIT)

Copyright (c) <2016> <Taikonauten GmbH>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR 
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---  
'made with ♡ by Taikonauten'  