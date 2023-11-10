import { useState } from "react";
const DisplayTodos = ({todos}) => {
    const[todo, setTodos]=useState([todos]);
    const deleteTodo = (todoId) => {
        console.log('deleting', todoId);
        const removed = todos.filter((each) => {
        return todoId !== each.id;
        });
       setTodos(removed);
    }
    console.log('todos', todos);
    return ( 
       <div>
         {todos.map((t, i) => (
            <div id="eachTodo">
                <div key={t.id}id="leftTodo">
                <h1>{i + 1}</h1>
                <h1>{t.newTodo}</h1>
                </div>
                <button onClick={() => deleteTodo(t.id)}>Delete</button>
            </div>
        ))}
       </div>
    );
}
 
export default DisplayTodos;