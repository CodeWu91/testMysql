var Database       = require('./DataBase');
Database.init();

setTimeout(() => {
    if (Database.msyql != null) {
        var sql = 'delete from t_users where lastLogin<1123456';
        Database.msyql.query(sql, function (err, rows, fields) {
            if (err) console.log(err);
            Database.close();
        });
    }
}, 1000);


