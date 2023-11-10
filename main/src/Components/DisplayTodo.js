
const DisplayTodos = ({todos}) => {
    return ( 
       <div>
         {todos.map((t) => (
            <div>
                <h1>{t}</h1>
            </div>
        ))}
       </div>
    );
}
 
export default DisplayTodos;