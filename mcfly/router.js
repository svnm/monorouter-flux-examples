var monorouter = require('monorouter');
var reactRouting = require('monorouter-react');
var PetStore = require('./stores/PetStore')
var PetList = require('./components/controller-views/PetList')
var PetDetails = require('./components/controller-views/PetDetail')

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
      PetStore.setPets(pets)
      this.render(PetList);
  })

  .route('pet', '/pet/:name', function(req) {
      // seed the store
      var pet = findPet(req.params.name)
      PetStore.setPet(pet)
      this.render(PetDetails);
  });
