import React, { Component } from 'react';
import Word from './components/Word';
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
      <div>
        <Word en="one" vn="mot" color="green" />
        <Word en="two" vn="hai" color="red" />
        <Word en="three" vn="ba" color="yellow" />
        <button className="btn btn-success">Hello</button>
      </div>
    );
  }
}

export default App;
