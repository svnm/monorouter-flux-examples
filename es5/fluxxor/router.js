var monorouter = require('monorouter');
var reactRouting = require('monorouter-react');

var PetList = require('./components/controller-views/PetList')
var PetDetails = require('./components/controller-views/PetDetail')

var Fluxxor = require("fluxxor")

var PetActions = require("./actions/PetActions")
var PetStore = require('./stores/PetStore')


/* simulate an API call */

function findPet(petName) {
  var pets = [ 
    {name: 'Winston', description: 'Winston is a fluffy dog'}, 
    {name: 'Chaplin', description: 'Chaplin is a skinny dog'}, 
    {name: 'Bennie', description: 'Bennie is a cool dog'} 
  ];

  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.name.toLowerCase() === petName) return pet;
  }
}

function findAllPets() {
  return [ 
    {name: 'Winston', description: 'Winston is a fluffy dog'}, 
    {name: 'Chaplin', description: 'Chaplin is a skinny dog'}, 
    {name: 'Bennie', description: 'Bennie is a cool dog'} 
  ];
}


module.exports = monorouter()
  .setup(reactRouting())

  .route('index', '/', function(req) {
      // seed the store
      var pets = findAllPets()
      var stores = { petStore: new PetStore({ pets: pets }) };
      var actions = { petActions: PetActions };
      this.render(PetList, { stores: stores, actions: actions} );
  })

  .route('pet', '/pet/:name', function(req) {
      // seed the store
      var pet = findPet(req.params.name)
      var stores = { petStore: new PetStore({ pet: pet }) };
      var actions = { petActions: PetActions };
      this.render(PetDetails, { stores: stores, actions: actions} );
  });
