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

  query(query){
    this.connection.query(query)
  }
}

module.exports = new DB();