import {useState} from 'react';
import DisplayTodos from './Components/DisplayTodo';
const Main = () => {
    const[todos, setTodos] = useState(['add a todo']);
    const[newTodo, setNewTodo] = useState('');
    const handleSubmit = () => {
        setTodos([...todos, newTodo]);
    };

    return ( 
        <main>
        <div id="inputForm">
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </div>
        <DisplayTodos todos={todos} />
        </main>

     );
}
 
export default Main;