var constants = require("../constants");

var actions = {
  getAuthors: function(pets) {
    this.dispatch(constants.GET_PETS, {});
  }

};

module.exports = actions;