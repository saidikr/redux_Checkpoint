import { Addtask } from "./components/Addtask"
import { ListTask } from "./components/ListTask"
import { SearchBar } from "./components/searchBar"
import { Task } from "./components/Task"


function App() {

  return (
    <div className="App">
    <h1 className="text-3xl font-bold  text-red-400">
      Hello world!
    </h1>
    <Addtask/>
    <SearchBar/>
    <ListTask/>
    </div>
  )
}

export default App
