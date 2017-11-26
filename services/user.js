const User = require('../db/user');

class UserService {

  static getGoal(userID) {
    const user = new User(userID);
    return user.getGoal()
  }

  static updateGoal(newGoal) {
    //TODO: Update goal through UserAR
  }
}

module.exports = UserService;