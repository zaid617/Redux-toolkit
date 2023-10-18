import { increment , decrement } from "./counterSlice"
import { useDispatch , useSelector} from "react-redux"
import './App.css'

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch =  useDispatch()

  return (
    <>
      <u><h1>React Counter With Redux</h1></u>

      <div className="card">

        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        
      </div>
    </>
  )
}

export default App
