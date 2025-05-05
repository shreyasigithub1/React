import "./ToDoList.css";
import { useSelector, useDispatch } from "react-redux";
//import { store } from "../../redux/store";//should not do it
//import { ToggleTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducers";

function ToDoList() {
  const todos = useSelector((state) => state.todoReducer.todos); //Getting the data from the store//it is the Subscriber
  //const todos=store.getState().todos; //should not do it
  const dispatch = useDispatch();//it is also publishing data to the store 
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
