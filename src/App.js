import React, {Component} from 'react';

class App extends Component{
  render(){
    return(
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }
}

class Parent extends Component {
  render(){
    let items = React.Children
      .map(this.props.children, child => child) 
    console.log(items)
    return null
  }
}

export default App;