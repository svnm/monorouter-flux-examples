var alt = require('../alt')
var PetActions = require ('../actions/PetActions')

function PetStore(data) {

  // init store
  /*
  for (var i = 0; i < data.length; i += 1) {
    //this.pets.push(data[i]);
  }
  */

  this.pets = [];
  this.pet = {};

  this.bindListeners({
    addItem: PetActions.addItem
  });
}

// This method and the idea of a pet and pets, 
// seems a bit wierd...
PetStore.prototype.addItem = function (item) {
  this.pet = item;
  this.pets.push(item);
};

PetStore.displayName = 'PetStore';
module.exports = alt.createStore(PetStore);