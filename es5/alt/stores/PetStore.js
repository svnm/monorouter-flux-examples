var alt = require('../alt')
//var PetActions = require ('../actions/PetActions')

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

//module.exports = alt.createStore(PetStore, 'PetStore')
module.exports = PetStore;