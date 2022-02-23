import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button onClick={shoot}>Take the shot!</button>
//   );
// }

// function Football() {
//   const shoot = (a) => {
//     alert(a);
//   }

//   return(
//     <button onClick={() => shoot("Goal!")}>Take the shot!</button>
//   );
// }

// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//     /*
//     'b' represents the React event that triggered the function.
//     In this case, the 'click' event
//     */
//   }

//   return(
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
// }

// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//   return <h1>GOAL!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal />;
//   }

//   return <MissedGoal />;
// }

// ReactDOM.render(<Football />, document.getElementById('root'));
// ReactDOM.render(
//   <Goal isGoal={false} />, document.getElementById('root'));
// ReactDOM.render(
//   <Goal isGoal={true} />,
//   document.getElementById('root'));

// function Garage(props) {
//   const cars = props.cars;
//   return(
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 && 
//         <h2>
//           You have {cars.length} cars in your garage.
//         </h2>
//       }
//     </>
//   );
// }

// const cars = ['Ford', 'BMW', 'Audi'];
// ReactDOM.render(
//   <Garage cars={cars} />,
//   document.getElementById('root'));
// function Garage(props) {
//   const cars = props.cars;
//   return(
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 && 
//         <h2>
//           You have {cars.length} cars in your garage.
//         </h2>
//       }
//     </>
//   );
// }

// const cars = [];
// ReactDOM.render(
//   <Garage cars={cars} />,
//   document.getElementById('root'));

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  return(
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

ReactDOM.render(
  <Goal isGoal={false} />,
  document.getElementById('root'));