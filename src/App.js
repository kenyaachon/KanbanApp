// import logo from './logo.svg';
// import './App.css';
import React from "react";
import KanbanBoard from "./KanbanBoard";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: [],
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true,
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false,
      },
      {
        id: 3,
        name: "My own experiments",
        done: false,
      },
    ],
  },
];

function App() {
  React.render(
    <KanbanBoard cards={cardsList} />,
    document.getElementById("root")
  );
}
export default App;
