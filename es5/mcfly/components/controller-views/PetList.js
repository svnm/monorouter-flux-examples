/** @jsx React.DOM */

var React = require('react')
var App = require('../templates/App')
var PetStore = require('../../stores/PetStore')
var PetView = require('../PetView')

/* controller view react class with stores */

var PetListComponent = React.createClass({

  mixins: [PetStore.mixin],

  getStateFromFlux: function() {
    return {
      pets: PetStore.getPets()
    }
  },
  
  getInitialState: function() {
    return this.getStateFromFlux()
  },

  onChange: function() {
    this.setState(this.getStateFromFlux())
  },

  render: function() {

    var links = this.state.pets.map(function(pet) {
      return (
          <li>
            <a href={"/pet/" + pet.name.toLowerCase()}>{pet.name}</a>
            <PetView pet={pet} />
          </li>
        );
    });

    return (
      <div>{links}</div>
    );
  }

});

/* controller view, initialized from monorouter */

function PetList(props) {  

  return (
    <App>
      <ul className="PetList">
        <PetListComponent />
      </ul>
    </App>
  );
}

module.exports = PetList;
