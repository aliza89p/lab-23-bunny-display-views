var express = require('express');

express().use(express.static('./build')).listen(8080, function() {
  console.log('App listening on port 8080!');
});
