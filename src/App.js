import React from "react";


class App extends React.Component{
  state = {
    isLoading : true
  };

  componentDidMount(){
    console.log("didMount");
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }

  render(){
    console.log("render");
    const {isLoading} = this.state;
    return (<div> 
        <h1>{isLoading ? "Loading" : "we are ready"}</h1>
       </div>)
  }
}

export default App;
