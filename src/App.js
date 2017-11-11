import React, { Component } from 'react';
import Word from './components/Word';
import ConditionCom from './components/ConditionCom';

// function component
  // class component
  // function Word(props) {
  //   return (
  // <div>
  //   <h3 style={{ color: props.color }}>{props.en}</h3>
  //   <p>{props.vn}</p>
  // </div>
  //   )
  // }

  // const Word = (props) => (
  //   <div>
  //     <h3 style={{ color: props.color }}>{props.en}</h3>
  //     <p>{props.vn}</p>
  //   </div>
  // );

  // class Word extends Component {
  //   render() {
  //     return (
  //       <div>
  //         <h3 style={{ color: this.props.color }}>{this.props.en}</h3>
  //         <p>{this.props.vn}</p>
  //       </div>
  //     );
  //   }
// }

class App extends Component {
  render() {
    return (
      <ConditionCom />
    );
  }
}

export default App;
