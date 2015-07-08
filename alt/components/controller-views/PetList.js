/** @jsx React.DOM */

var React = require('react')
var App = require('../templates/App')
var PetStore = require('../../stores/PetStore')
var PetActions = require('../../actions/PetActions')
var PetView = require('../PetView')

/* controller view react class with stores */

var PetListComponent = React.createClass({

  getInitialState: function() {
    return PetStore.getState();
  },

  componentDidMount: function() {
    PetStore.listen(this.onChange);

    // seed the data in an init method... must be a better place

    // by the way this keeps getting init'd and 
    // a heap of pets are being added.....
    
    this.init(this.props.pets)
  },

  init: function (pets) {
    for (var i = 0; i < pets.length; i += 1) {
      PetActions.addItem(pets[i])
    }
  },

  componentWillUnmount: function() {
    PetStore.unlisten(this.onChange);
  },

  onChange: function (state) {
    this.setState(state);
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

function PetList(data) {  

  return (
    <App>
      <ul className="PetList">
        <PetListComponent pets={data.pets} />
      </ul>
    </App>
  );
}

module.exports = PetList;