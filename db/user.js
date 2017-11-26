const db = require('./db');

class User {
  constructor(userID){
    this.id = userID;
  }

  getGoal(){
    return db.query(`SELECT * FROM goals WHERE user_id = ${this.id}`)
  }

  updateGoal(){
    //TODO: Perform DB query
  }
}

module.exports = User;