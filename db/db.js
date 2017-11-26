const mysql = require('mysql');

class DB {
  constructor(){
    this.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'fod_dev'
    });
    this.connection.connect()
  }

  query(sql){
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err, rows) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

module.exports = new DB();