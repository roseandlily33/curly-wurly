import Main from './Components/Main';
import { TodoContext } from './context';


function App() {
  const todo = 'hi'
  return (
    <TodoContext.Provider value={todo}>
      <div className="App">
      <header className="App-header">
       <Main />
      </header>
    </div>
    </TodoContext.Provider>
  );
}

export default App;
