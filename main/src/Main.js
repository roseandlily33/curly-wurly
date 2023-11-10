import {useState} from 'react';
import DisplayTodos from './Components/DisplayTodo';
const Main = () => {
    const[todos, setTodos] = useState([]);
    const[newTodo, setNewTodo] = useState('');
    const[description, setDescription] = useState('');
    const handleSubmit = () => {
        if(newTodo !== ''){
            setTodos([...todos, {
                id: Math.floor(Math.random() * 1000),
                newTodo,
                description}]);
            setNewTodo('');
            setDescription('');
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
            <label for={newTodo}>Todo:</label>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <label for={description}>Description:</label>
            <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <button id="formBtn" type="submit" onClick={handleSubmit}>Add Todo</button>
        </div>
        <DisplayTodos todos={todos} deleteTodo={deleteTodo}/>
        </main>

     );
}
 
export default Main;