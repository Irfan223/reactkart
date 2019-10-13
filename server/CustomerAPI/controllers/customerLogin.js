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
    var email = req.query.email;
    var password = req.query.password;
    var sql = "SELECT * from CustomerLogin WHERE CustomerEmail =? AND CustomerPassword =?";
    connection.query(sql, [email,password], function (err, result) {
        if (err) throw err;
        // console.log(JSON.stringify(result[0].customerId));
        // res.send(rows);
    });

}