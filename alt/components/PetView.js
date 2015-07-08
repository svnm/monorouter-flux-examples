/** @jsx React.DOM */

var React = require('react')

var PetView = React.createClass({

  setColor: function(color) {
    FluxCounterActions.setColor();
  },

  render: function() {
    return (
      <div className="pet-view">
        <p>{this.props.pet.description}</p>
      </div>
    );
  },

});

module.exports = PetView;