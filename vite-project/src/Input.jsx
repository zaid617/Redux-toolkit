import { useDispatch } from "react-redux";
import { addTodo ,deleteAll } from "./slices/todoSlice";

import {useState} from 'react'

export default function Input() {

    const [input, setInput] = useState("");
    let [errorText , setErrorText] = useState("")

    const dispatch = useDispatch();
  
    const addTodos = (e) => {
        e.preventDefault()
      if (input.trim() !== "") {
        dispatch(addTodo({ text: input }));
        setInput("");
      }
      else{
        setErrorText("Please enter a text then add !")
        setTimeout(() => {
            setErrorText("")
        }, 1200);
      }
    };

    const deleteAllTodos = ()=>{
        dispatch(deleteAll());
    }
  

  return (

    <>
    <form className="todo-input" onSubmit={addTodos}>
    <input
      type="text"
      placeholder="Add a new todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button type="submit" className="btn">Add</button>
  </form>
    <button onClick={deleteAllTodos}>DeleteAll</button>
    <p className="error">{errorText}</p>
  </>
  )
}
