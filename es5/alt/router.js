var monorouter = require('monorouter');
var reactRouting = require('monorouter-react');
var PetStore = require('./stores/PetStore')
var PetList = require('./components/controller-views/PetList')
var PetDetail = require('./components/controller-views/PetDetail')

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


/* controller view, initialized from monorouter */

module.exports = monorouter()
  .setup(reactRouting())

  .route('index', '/', function(req) {
      // seed the store

      var pets = findAllPets()
      this.render(PetList, {pets: pets})
  })

  .route('pet', '/pet/:name', function(req) {
      // seed the store

      var pet = findPet(req.params.name)
      this.render(PetDetail, {pet: pet})
  });
