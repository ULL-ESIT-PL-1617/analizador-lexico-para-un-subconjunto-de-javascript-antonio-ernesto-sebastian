var ghPages = require('gh-pages');
var path = require('path');

ghPages.publish(path.join(__dirname, '../gh-pages'), function(err) {
   console.log("Gitbook desplegado");
   console.log(err);
 });
