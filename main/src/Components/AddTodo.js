import { useEffect, useState } from "react";
const AddTodo = ({todos}) => {
    const[newTodo, setNewTodo] = useState('');
    const[myTodos, setMyTodos] = useState([]);

    useEffect(() => {
        setMyTodos(todos)
    }, [todos]);

    const handleSubmit = () => {
        setMyTodos([newTodo, ...myTodos])
    }
    return ( 
        <div>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button type="submit" onClick={handleSubmit}>Add Toso</button>
        </div>
     );
}
 
export default AddTodo;