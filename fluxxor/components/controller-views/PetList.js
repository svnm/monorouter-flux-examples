/** @jsx React.DOM */

var React = require('react')
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var App = require('../templates/App')
var PetStore = require('../../stores/PetStore')
var PetView = require('../PetView')

/* controller view react class with stores */

var PetListComponent = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin("petStore")],

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      petStore: flux.stores.petStore.getState()
    };
  },

  render: function() {

    var links = this.state.petStore.pets.map(function(pet) {
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

  console.log(props.stores)
  var flux = new Fluxxor.Flux(props.stores, props.actions);

  return (
    <App>
      <ul className="PetList">
        <PetListComponent flux={flux} />
      </ul>
    </App>
  );
}

module.exports = PetList;
