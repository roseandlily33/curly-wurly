
const DisplayTodos = ({todos}) => {
    return ( 
       <div>
         {todos.map((t, i) => (
            <div id="eachTodo">
                <div id="leftTodo">
                <h1>{i + 1}</h1>
                <h1>{t}</h1>
                </div>
                <button>Delete</button>
            </div>
        ))}
       </div>
    );
}
 
export default DisplayTodos;