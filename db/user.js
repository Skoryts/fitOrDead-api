const db = require('./db');

class User {
  constructor(userID){
    this.id = userID;
    console.log(db)
  }

  getGoal(){
    //TODO: db.query('SELECT * FROM user_goals WHERE user_id = this.id')
    return {
      proteins: 160,
      fats: 50,
      carbohydrates: 300,
      calories: 2200
    }
  }

  updateGoal(){
    //TODO: Perform DB query
  }
}

module.exports = User;