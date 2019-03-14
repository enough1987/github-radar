1.request
===========

```javascript
var request = require( 'request' );
app.all( '/proxy/*', function( req, res ){
    req.pipe( request({
        url: config.backendUrl + req.params[0],
        qs: req.query,
        method: req.method
    })).pipe( res );
});
```
It works fine if remote host is available, but if remote host is unavailable the whole node server crashes with unhandled exception

```javascript
app.all( '/proxy/*', function( req, res ){
  req.pipe( request({
      url: config.backendUrl + req.params[0],
      qs: req.query,
      method: req.method
  }, function(error, response, body){
    if (error.code === 'ECONNREFUSED'){
      console.error('Refused connection');
    } else { 
      throw error; 
    }
  })).pipe( res );
});
```

You should actually try to prevent the ECONNREFUSED exception from becoming uncaught:
```javascript
var request = require( 'request' );
app.all( '/proxy/*', function( req, res ){
    req.pipe( request({
        url: config.backendUrl + req.params[0],
        qs: req.query,
        method: req.method
    }))
    .on('error', err => {
        const msg = 'Error on connecting to the webservice.';
        console.error(msg, err);
        res.status(500).send(msg);
    })
    .pipe( res );
});
```
If you get an actual uncaught exception, then you should just let the application die.


1. If you store any state on your servers that you don't want to loose when a server is down then store your state on the two specific database servers - a master and a replica. If you don't know which database server to pick then let me know and I will ask you additional questions to help.
1. If a client code that is using your servers is under your control then implement all the fault tolerance logic in there. The simplest way of doing this is the "round robin" - you connect to a random server until you find a server which serves your request. Google "round robin" for more details.
1. If a client code is not under your control then you should use BGP load balancing. The main idea of that is that once a server is down another server gets the IP address of the first one, such as on a client side everything is perfect. For more details just google "bgp load balancing".



2.blueburd
=========

3.domain
=========

4.cluster
===========

5.forever
==========

6.pm2
=======


7.morgan
==========

8.bunyan
==========



