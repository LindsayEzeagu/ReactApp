import React from "react";


// Array destructuring

const nameSplit = "Lindsay Ezeagu".split(" ");
//console.log(nameSplit);



const firstName0 = nameSplit[0];
const lastName0 = nameSplit[1];


const [firstName] = nameSplit;
console.log(firstName);

const person = ["Angelica", "Smith", "Data Analyst", "Brentford"];
let [fName, ,occupation] = person;


const arrayOfBooks = [
"Half of a Yellow Sun",
"Black Leopard, Red Wolf",
"Born a Crime",
"Americanah",
"Ghana Must Go",
];


class BookList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            booksArray: [],
        };
    }
    render(){
        return(
            <div className="BookList">
                <h1>Books for {this.props.name}</h1>
                <ul>
                    {arrayOfBooks.map((book)=> (
                        <li key={book}>{book}</li>
                    ))}
                </ul>
                <p>
                    {fName} is a {occupation}
                </p>
            </div>
        );
    }
}


// class BookList extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             booksArray: [],
//         };
//     }
//     render(){
//         return(
//             <div className="BookList">
//                 <h1>Books for {this.props.name}</h1>
//                 <ul>
//                     <li>Half of a Yellow</li>
//                     <li>Black Leopard,Red Wolf</li>
//                     <li>Born a Crime</li>
//                     <li>Americanah</li>
//                     <li>Ghana Must Go</li>
//                 </ul>
//             </div>
//         );
//     }
// }

export default BookList;