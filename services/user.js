const User = require('../db/user');

class UserService {
  constructor(){
    this.user = new User();
  }

  static getGoal() {
    //TODO: Make request to UserAR
    // return this.user.getGoal();
    return {
      protein: 160,
      fats: 50,
      carbohydrates: 300,
      calories: 2200
    }
  }

  static updateGoal(newGoal) {
    //TODO: Update goal through UserAR
  }
}

module.exports = UserService;