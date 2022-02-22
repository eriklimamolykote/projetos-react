import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car.js';
import '../src/mystyle.css';

// const myelement = <h1>I love JSX!</h1>
// const myelement = React.createElement('h1', {}, 'I do not use JSX!');
// const myelement = <h1>React is {5 + 5} times better with JSX</h1>
// const myelement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );
// const myelement = (
//   <div>
//     <h1>I am a Header.</h1>
//     <h1>I am a Header too.</h1>
//   </div>
// );
// const myelement = (
//   <>
//     <p>I am a paragarph.</p>
//     <p>I am a paragraph too.</p>
//   </>
// );
// const myelement = <input type="text" />;
// const myelement = <h1 className = "myclass">Hello World</h1>
// const x = 5;
// let text = "Goodbye";
// if (x < 10){
//   text = "Hello";
// }

// const myelement = <h1>{text}</h1>;
// const x = 5;

// const myelement = <h1>{(x) < 10 ? "Hello": "Goodbye"}</h1>

// function Car() {
//   return <h2>Hi, I am a Car!</h2>
// }
// function Car(props) {
//   return <h2>I am a {props.color} Car!</h2>;
// }

// function Car() {
//   return <h2>I am a Car!</h2>;
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car />
//     </>
//   );
// }

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }
// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }

//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// }
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <h2>I am a {this.props.model}!</h2>;
//   }
// }
// class Car extends React.Component {
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>Who lives in my Garage?</h1>
//         <Car />
//       </div>
//     );
//   }
// }

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }

//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }

//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol};
//   }

//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <h1>This is the content of the Header component</h1>
//     );
//   }
// }

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 1000)
//   }

//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));

// ReactDOM.render(<Garage />, document.getElementById('root'));
// ReactDOM.render(<Car />, document.getElementById('root'));