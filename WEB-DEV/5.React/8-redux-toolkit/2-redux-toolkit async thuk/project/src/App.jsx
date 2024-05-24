import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./features/todos/todoSlice";
function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  if(todos.isLoading){
    return(<h1>Loading....</h1>)
  }

  return (
    <div>
      <button onClick={()=>dispatch(fetchTodos())}>Fetch Todos</button>
     {todos.data && todos.data.map((todo)=>(
      <p key={todo.id}>{todo.title}</p>
     ))}
    </div>
  );
}

export default App;
