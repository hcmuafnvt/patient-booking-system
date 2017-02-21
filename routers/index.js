module.exports = function(app) {
   app.get('/', function(req, res) {
      res.render('index');
   });

   //api
   app.get('/api/searchitems', function(req, res) {
       var amazon = require('amazon-product-api');
       var client = amazon.createClient({
            awsId: "AKIAILTFB2GFBUZPHRJA",
            awsSecret: "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",
            awsTag: "orderhangus-20"
       });

       client.itemSearch({            
            SearchIndex: 'Books',
            Keywords: 'business adventures',
            responseGroup: 'Images,ItemAttributes,Offers'
        }).then(function(results){
            //console.log(results);
            res.json(results); 
        }).catch(function(err){
            res.end(err); 
        });

       
   });

   app.use(function(req, res) {
      res.end('<h1>404 page</h1>');
   });

   
};
