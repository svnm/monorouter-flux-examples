var Fluxxor = require("fluxxor");
var constants = require("../constants");

var store = Fluxxor.createStore({
  initialize: function(data) {

    this.pets = [];
    this.pet = {name: 'Winston', description: 'Winston is a fluffy dog'}

    if(data !== undefined){

      if(data.pets !== undefined){
        this.pets = data.pets;
      }

      if(data.pet !== undefined){
        this.pet = {name: 'Winston', description: 'Winston is a fluffy dog'}
      }
    }

    this.onGetPets();

    this.bindActions(
      constants.GET_PETS, this.onGetPets
    );
  },

  onGetPets: function() {
    /* simulate getting from a service */
    this.emit("change");
  },

  getState: function() {
    return {
      pets: this.pets,
      pet: this.pet
    };
  }
});

module.exports = store;


/*
var PetStore = function(){
   var pets = [];
   var pet = {name: 'Winston', description: 'Winston is a fluffy dog'}
   function getPet(){
     return pet;
   }

   function getPets(){
     return pets;
   }

   function setPet(p){
     pet = p;
   }

   function setPets(p){
     pets = p;
   }

   return {
      name: 'PetStore',
      setPet: setPet,
      setPets: setPets,
      getPet: getPet,
      getPets: getPets
   }
}();

module.exports = PetStore;
*/