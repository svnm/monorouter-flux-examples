/** @jsx React.DOM */

var React = require('react')
var App = require('../templates/App')
var PetStore = require('../../stores/PetStore')
var PetView = require('../PetView')

/* controller view react class with stores */

var PetDetailComponent = React.createClass({
  
  getStateFromFlux: function() {
	  return {
	    pet: PetStore.getPet()
	  }
  },

  getInitialState: function() {
    return this.getStateFromFlux()
  },

  onChange: function() {
    this.setState(this.getStateFromFlux())
  },

  render: function() {
  	return (
  		<div>
          <PetView pet={this.state.pet} />
          <a href="/">See all pets!</a>
        </div>
  	);
  }

});

/* controller view, initialized from monorouter */

function PetDetail() {
  
  return (
    <App>
      <div className="PetDetail">
		<PetDetailComponent />
      </div>
    </App>
  );
}


module.exports = PetDetail;