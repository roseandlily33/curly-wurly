import {useState} from 'react';
import AddTodo from './Components/AddTodo';
const Main = () => {
    const [todos, setTodos] = useState(['one', 'two']);

    console.log(todos)
    return ( 
        <main>
            <AddTodo todos={todos}/>
        </main>

     );
}
 
export default Main;