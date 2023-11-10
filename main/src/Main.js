import {useState} from 'react';
import DisplayTodos from './Components/DisplayTodo';
const Main = () => {
    const[todos, setTodos] = useState([]);
    const[newTodo, setNewTodo] = useState('');
    const handleSubmit = () => {
        if(newTodo !== ''){
            setTodos([...todos, {
                id: Math.floor(Math.random() * 1000),
                newTodo}]);
            setNewTodo('');
        }
    };
    const deleteTodo = (todoId) => {
        console.log('deleting', todoId);
        const removed = todos.filter((each) => {
        return todoId !== each.id;
        });
       setTodos(removed);
    }
    return ( 
        <main>
        <div id="inputForm">
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </div>
        <DisplayTodos todos={todos} deleteTodo={deleteTodo}/>
        </main>

     );
}
 
export default Main;