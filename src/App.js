import Navigation from "./components/Navigation/Navigation.js";
import BookList from "./components/booklist/BookList";
import Button from "./components/button/Button";
import Counter from "./components/counter/Counter";
// import Welcome, { WelcomeStudent } from "./components/welcome/Welcome";
import Welcome from "./components/welcome/Welcome.js";



const name = "Lindsay Ezeagu";
const hasUser = false;

function App() {

  if (hasUser){
    return <h3>{name} is a user here</h3>;
  }
  return (
    <div>
    <Navigation />
    <Welcome nameProps={name} />
    <BookList name={name} />
    <BookList name="Alex" />
    <Button
      text="View Bootcamps"
      buttonBackground="rgb(251, 175, 0)"
      buttonColor="#fff"
    />
    <br />
    <br />
    <Button
      text="Partner with us"
      buttonBackground="rgb(251, 175, 0)"
      buttonColor="#fff"
    />
    <Counter />
  </div>

    );
  }

export default App;


// function App() {

//   if (hasUser){
//     return <h3>{name} is a user here</h3>;
//   }
//   return (
//     <div>
//     <Navigation />
//     <h3>Welcome, {name}</h3>
//     <BookList name="Alex Fatoberu"/>
//     <BookList name="Lupin Assane" />
//   </div>

//     );
//   }




//const Element = <h1>This is an h1 Element</h1>
// Delete App.css and logo.svg
// INSIDE FUNCTION APP
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );