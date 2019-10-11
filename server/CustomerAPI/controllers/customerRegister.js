var config = require('./../../Config/databaseConfig.js');
var connection = config.connection;
module.exports.CustomerRegister = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    var sql = "INSERT INTO CustomerLogin(CustomerName, CustomerEmail, CustomerMobile, CustomerPassword) VALUES(?, ?, ?, ?)";
    connection.query(sql, ['Md Irfan', 'cseirfan17@gmail.com', '8910541678', 12345], function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });

}