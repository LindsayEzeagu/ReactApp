import Navigation from "./components/Navigation/Navigation.js";

const name = "Lindsay Ezeagu";
const hasUser = false;

function App() {

  if (hasUser){
    return <h3>{name} is a user here</h3>;
  }
  return (
    <div>
    <Navigation />
    <h3>Welcome, {name}</h3>
    <BookList name="Alex Fatoberu"/>
    <BookList name="Lupin Assane" />
  </div>

    );
  }

export default App;




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