import React from "react";
import Login from './Login'
import Application from "./Application";

// class App extends React.Component {
//   constructor() {
//     super();
  
//   }


//   render() {
//     return (
//       <div>
//     {/* <Application/> */}
//     <Login/>
//       </div>
//     );
//   }
// }

// export default App;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Condition: true,
    };
    this.navigate = this.navigated.bind(this);
  }

  navigated() {
    this.setState({ Condition: !this.state.Condition });
  }

  render() {
    return (
      <div>
        {this.state.Condition ? (
          <Login nav={this.navigate} />
        ) : (
          <Application nav={this.navigate} />
        )}
      </div>
    );
  }
}

export default App;