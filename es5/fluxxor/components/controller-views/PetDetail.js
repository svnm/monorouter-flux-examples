/** @jsx React.DOM */

var React = require('react')
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var App = require('../templates/App')
var PetStore = require('../../stores/PetStore')
var PetView = require('../PetView')

/* controller view react class with stores */

var PetDetailComponent = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin("petStore")],
  
  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      petStore: flux.stores.petStore.getState()
    };
  },

  render: function() {
  	return (
  		<div>
          <PetView pet={this.state.petStore.pet} />
          <a href="/">See all pets!</a>
        </div>
  	);
  }

});

/* controller view, initialized from monorouter */

function PetDetail(props) {
  
  var flux = new Fluxxor.Flux(props.stores, props.actions);

  return (
    <App>
      <div className="PetDetail">
		    <PetDetailComponent flux={flux} />
      </div>
    </App>
  );
}


module.exports = PetDetail;