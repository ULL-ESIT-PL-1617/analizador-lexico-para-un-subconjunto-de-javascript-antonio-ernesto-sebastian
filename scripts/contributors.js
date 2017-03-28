const dateDifference = require ('date-difference');
const fs = require('fs');
require('simple-git')()
      .log(function(err, log) {
         if(err){
            console.error(err);
         }
         else {
            let contribuidores = [];
            let indices = [];
            let data = "";
            for (var i = 0; i < log.all.length; i++)
               if (!contribuidores.includes(log.all[i].author_name)) {
                  contribuidores.push(log.all[i].author_name);
                  indices.push(i);
               }
            for (var i = 0; i < indices.length; i++)  {
               data += "#Last Update: " + new Date + "\n";
               data += log.all[indices[i]].author_name + " <" + log.all[indices[i]].author_email + "> (since " + log.all[indices[i]].date + ", " + dateDifference (new Date (log.all[indices[i]].date), new Date) + ")\n";
            }
            fs.writeFileSync('MAINTAINERS', data);
         }
        });
