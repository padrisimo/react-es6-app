import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render(){
    let txt = this.props.txt;
    return (
      <div>
        <h1>{txt}</h1>
        <b>bold</b>
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

export default App;