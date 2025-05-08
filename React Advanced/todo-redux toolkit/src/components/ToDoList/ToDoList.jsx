import "./ToDoList.css";
import { useSelector, useDispatch } from "react-redux";
//import { store } from "../../redux/store";//should not do it
//import { ToggleTodo } from "../../redux/actions/todoActions";
import { actions, getInitialStateAsync } from "../../redux/reducers/todoReducers";
import { todoSelector } from "../../redux/reducers/todoReducers";
import { useEffect } from "react";
import axios from "axios";

function ToDoList() {
  //const todos = useSelector((state) => state.todoReducer.todos); //Getting the data from the store//it is the Subscriber
  const todos = useSelector(todoSelector);
  //const todos=store.getState().todos; //should not do it
  const dispatch = useDispatch(); //it is also publishing data to the store

  useEffect(() => {
    dispatch(getInitialStateAsync());//here if we pass any parameter it will got to arg in createAsyncThunk
    // fetch("http://localhost:4100/api/todos/")
    //   .then((res) => res.json())
    //   .then((parsedJson) => {
    //     console.log(parsedJson);
    //   });
    //another method for fetch
    // axios.get("http://localhost:4100/api/todos/").then((res) => {
    //   console.log(res.data);
    //   dispatch(actions.setIntialState(res.data));
    // });
  }, []);

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(actions.toggle(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
