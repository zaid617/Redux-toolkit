import { useSelector , useDispatch} from "react-redux";
import { deleteTodo  } from "./slices/todoSlice";


export default function Todos() {

const todoss = useSelector((state) => state.todos);
const dispatch = useDispatch()
        
const removeTodo = (index) => {
    dispatch(deleteTodo(index));
  };


  return (
    <ul className="todo-list">
    {todoss.map((todo, index) => (
      <li key={index}>
        <span><b style={{marginRight:"5px"}}>{index+1}. </b> {todo.text}</span>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </li>
    ))}
  </ul>
  )
}
