import { useContext } from "react";
import { TodoContext } from "../context";
const Main = () => {
    const todo = useContext(TodoContext);

    return ( 
        <main>
            <h1>Main Content</h1>
        </main>
     );
}
 
export default Main;