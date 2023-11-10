const DisplayTodos = ({todos, deleteTodo}) => {
    return ( 
       <div>
         {todos.map((t, i) => (
            <div key={t.id} id="eachTodo">
                <div id="leftTodo">
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