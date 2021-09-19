import ReactDOM from "react-dom";
// import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import KanbanBoard from "./KanbanBoard";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the **whole** book",
    color: "#BD8D31",
    status: "in-progress",
    tasks: [],
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    color: "#3A7E28",
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

ReactDOM.render(
  <KanbanBoard cards={cardsList} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
