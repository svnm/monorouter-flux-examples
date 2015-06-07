/** @jsx React.DOM */

var React = require('react')
var App = require('../templates/App')

var PetStore = require('../../stores/PetStore')
var PetActions = require('../../actions/PetActions')
var PetView = require('../PetView')

/* controller view react class with stores */

var PetDetailComponent = React.createClass({

  getInitialState: function() {
    return PetStore.getState();
  },

  componentDidMount: function() {

    // seed the data in an init method... must be a better place
    this.init(this.props.pet)

    PetStore.listen(this.onChange);
  },

  init: function (pet) {
    PetActions.addItem(pet)
  },

  componentWillUnmount: function() {
    PetStore.unlisten(this.onChange);
  },

  onChange: function (state) {
    this.setState(state);
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

function PetDetail(data) {

  return (
    <App>
        <PetDetailComponent pet={data.pet} />
    </App>
  );
}

module.exports = PetDetail;