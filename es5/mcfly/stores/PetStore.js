var mcFly = require('../mcFly');

var _pet = {}
var _pets = {}

function setPet(pet) {
  _pet = pet
}

function setPets(pets) {
  _pets = pets
}

var CounterStore = mcFly.createStore({

  getPet: function() {
    return _pet;
  },

  getPets: function() {
    return _pets;
  },

  setPet: function(pet) {
    setPet(pet);
  },

  setPets: function(pets) {
    setPets(pets);
  }

}, function(payload){

  CounterStore.emitChange();

  return true;

});

module.exports = CounterStore;