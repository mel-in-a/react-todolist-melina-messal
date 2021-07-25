import "./App.css";
import "./Margin-padding-bootstrap.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todoitem from "./components/Todoitem";

// font awesome example
// link : https://apollo.lereacteur.io/course/5f3e73f7ac3b9c0017f4e8d6/60c87cc1b8f3860017db4a3f
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
library.add(faClipboardList);

function App() {
  const [todo, setTodo] = useState([0, 0]);
  const addTodo = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    const newTodo = [...todo];
    newTodo.push(setTodo);
    console.log(todo);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <form action="">
          <input
          name="todo"
            type="text"
            placeholder="Todo"
            className="mt-3"
            onChange={(event) => setTodo(event.target.value)}
          />
    
        <button onClick={addTodo} className="btn-basic mt-3" type="submit">
          Add todo
        </button>
        </form>

        {/* create a todo map items */}

        {/* {todo.map((item, index) => {
          return <Todoitem key={index} todo={item} />
        })} */}

        {/* {todo.map((todo, index) => (
          <Todoitem key={index} todo={todo} />
        ))} */}
        <Todoitem todo={todo} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
