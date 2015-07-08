var alt = require('../alt');

var PetActions = {
  addItem: function (item) {
    this.dispatch(item);
  }
};

PetActions.displayName = 'PetActions';
module.exports = alt.createActions(PetActions);