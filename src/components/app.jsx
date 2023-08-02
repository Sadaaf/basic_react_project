import React, { Component } from "react";
import Profile from './profile'


import Skills from "./profile/skills";

class Child extends Component{
  render(){
    this.props.func(this);
    return <h1>Element</h1>
  }
}

const ChildComponent = props => (
  <div>
    <h3>I am a Child Component</h3>
    <p>I don't know what to do</p>
    {props.children}
  </div>
)

class App extends Component {

  getContext(context){
    console.log(context)
  }

  render() {
    this.getContext(this)
    return <div className="App">
      {/* <Child func={this.getContext} /> */}
    <Profile/>
    <ChildComponent>
      <h2>Hello I am from parent</h2>
      <h4>I am child of  child component</h4>
    </ChildComponent>
    <div>
      <h3>List of programmers</h3>
      <p>Mr X</p>
      <Skills skillA="React" skillB="Angular" skillC="Vue" />
      <p>Mr Y</p>
      <Skills skillA="Ruby" skillB="Pearl" skillC="JSX"/>
    </div>
    </div>
  }
}

export default App;
