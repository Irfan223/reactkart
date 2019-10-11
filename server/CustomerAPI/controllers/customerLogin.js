var config = require('./../../Config/databaseConfig.js');
var connection = config.connection;
module.exports.CustomerLogin = function (req, res) {
    // const collection = req.app.locals.collection;
    // collection.find().toArray(function(err, items) {
    //     if(err) throw err;    
    //     console.log(items);
    //     res.send(items);
    // });
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    console.log(req.query.Cemail);
    var sql = "SELECT * from CustomerLogin";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        // console.log(result);
        // res.send(result);
    });

}