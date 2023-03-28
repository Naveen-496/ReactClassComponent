import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ClassApp />
    </div>
  );
}
class ClassApp extends React.Component{
    
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      message: ""
    }

    this.changeCounter = this.changeCounter.bind(this);

  }

  changeCounter(){
    this.setState({counter: this.state.counter + 1});
  }
  changeMessage = (message = "hello") => {
    if( this.state.message){
      this.setState({message: ""})
    }
    else{
      this.setState({message});
    }
  }

    render(){

      return(
     <div>
        <button onClick={this.changeCounter} 
        >counter: {this.state.counter}</button>
        <br/>
        <br/>
        <button onClick = {() => this.changeMessage()}>message:{this.state.message}</button>
       <br/><br/>
        <input type="text" 
         onChange={e => this.setState({message: e.target.value})}/>
     </div>
      )
      }
}