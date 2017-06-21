import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(){
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount() {
    console.log('componentwillMount');
    this.setState({m: 2});
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.inc = setInterval(this.update, 500);
  }
  componentWillUnmount() {
    console.log('====================================');
    console.log('componetWillUnmount');
    console.log('====================================');
    clearInterval(this.inc);
  }
  render(){
    console.log('render');
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }
}

class Wrapper extends Component {
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick ={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;