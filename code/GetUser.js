const userdatadictionary = require("../LocalData/login.json");

class GetUsers {
  async getUserByKey(uniqueKey) {
    return userdatadictionary[uniqueKey];
  }
}
module.exports = GetUsers;
