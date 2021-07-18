import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import Home from './MyComponents/Home';
//import User from './MyComponents/User';
import React, {useState,useEffect,Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

 // Component inside component. This component we can not use outside of this component
 function Apple() {
      return (
           <div>My Apple Component</div>
      )
 }

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on delete of todo ", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = 1;
    if (todos.length > 0) {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);
    console.log("myTodo ", myTodo);

  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todo List" searchBar={true} />
        <Switch>
          <Route exact path={["/myTodoList", "/"]} render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
            {Apple()}
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}
class User extends Component {

  render(){

       return (
               <h4>My User Component || </h4>
       )
  }
}

export default App;
