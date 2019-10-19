
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
        const domain = 'localhost';
        // const parsed = JSON.parse(body);
        console.log(JSON.stringify(result[0]))
        const customerId = JSON.stringify(result[0].customerId);
        const CustomerName = JSON.stringify(result[0].CustomerName);
        const CustomerEmail = JSON.stringify(result[0].CustomerEmail);
        const CustomerMobile = JSON.stringify(result[0].CustomerMobile);
        // res.cookie('customerId',customerId, '/');
        // res.cookie('CustomerName',CustomerName, '/');
        // res.cookie('CustomerEmail',CustomerEmail, '/');
        // res.cookie('CustomerMobile',CustomerMobile, '/');
        // res.status(200).json({'status':'cookies set!'})

        // console.log(JSON.stringify(result[0].customerId));
        // res.send(rows);
    });

}