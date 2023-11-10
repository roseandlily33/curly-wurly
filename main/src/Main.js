import {useState} from 'react';
import DisplayTodos from './Components/DisplayTodo';
const Main = () => {
    const[todos, setTodos] = useState(['one', 'two']);
    const[newTodo, setNewTodo] = useState('');
    const handleSubmit = () => {
        setTodos([...todos, newTodo]);
        console.log('mytodos', todos);
    };

    console.log(todos)
    return ( 
        <main>
        <div>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </div>
        <DisplayTodos todos={todos} />
        </main>

     );
}
 
export default Main;