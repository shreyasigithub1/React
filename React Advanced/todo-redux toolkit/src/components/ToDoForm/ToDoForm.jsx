import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch, useSelector } from "react-redux";
//import { AddTodo } from "../../redux/actions/todoActions";
import { actions, addTodoAsync } from "../../redux/reducers/todoReducers";
import { notificationSelector } from "../../redux/reducers/notificationReducer";
import { resetNotification } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(AddTodo(todoText));//publishing the data to the store
    // dispatch(actions.add(todoText));
    dispatch(addTodoAsync(todoText));
    setTodoText("");
    setTimeout(() => dispatch(resetNotification()), 3000);
  };

  return (
    <div className="container">
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
