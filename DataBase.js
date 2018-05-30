

var DataBase        = exports;
var config         = require('./config').mysql;
var mysql           = require('mysql');
DataBase.msyql = null;

DataBase.init =  function () {
    if (DataBase.msyql == null) {
        DataBase.msyql = mysql.createPool({
            host:       config.MYSQL_HOST,
            port:       config.MYSQL_PORT,
            user:       config.MYSQL_USER,
            password:   config.MYSQL_PSWD,
            database:   config.MYSQL_DB,
            connectionLimit : 50,
        });
    }
};

DataBase.close = function (callback) {
    callback = callback || _nop;
    if (DataBase.msyql != null) {
        DataBase.msyql.end(function (err) {
            DataBase.msyql = null;
            console.log('mysql 退出成功');
            callback(err);

        });
    }
};

function _nop(/* ... */) {
    
}


