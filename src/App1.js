import React, { Component, useState, useEffect, useRef } from 'react';
import Child1 from './Child1';

// Life cycle method
// methods
// state

// class App1 extends Component {
//   state = {
//     todo: '',
//     todoList: [],
//   };

//   addTodo = (event) => {
//     event.preventDefault();
//     this.setState(({ todo, todoList }) => ({
//       todoList: [
//         ...todoList,
//         { text: todo, isDone: false, id: new Date().valueOf() },
//       ],
//       todo: '',
//     }));
//   };

//   onChangeText = (event) => {
//     this.setState({
//       todo: event.target.value,
//     });
//   };

//   render() {
//     const { todo, todoList } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.addTodo}>
//           <input type="text" value={todo} onChange={this.onChangeText} />
//           <button type="submit">Add Todo</button>
//         </form>
//         {todoList.map((x) => (
//           <div>
//             <input
//               type="checkbox"
//               name="isDone"
//               id="isDone"
//               checked={x.isDone}
//             />
//             <span>{x.text}</span>
//             <button type="button">Delete</button>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

const App1 = () => {
  const isLoaded = useRef(false);
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  // componentDidMount

  useEffect(() => {
    if (isLoaded.current === true) {
      console.log('calling on todoList value change');
    }
  }, [todo, todoList]);

  useEffect(() => {
    console.log('calling from useEffect');
    isLoaded.current = true;
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    setTodoList((value) => [
      ...value,
      { id: new Date().valueOf(), text: todo, isDone: false },
    ]);
    setTodo('');
  };

  const onChangeText = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      {todoList < 1 && <Child1 value={5} />}
      <form onSubmit={addTodo}>
        <input type="text" value={todo} onChange={onChangeText} />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        {todoList.map((x) => (
          <div key={x.id}>
            <input
              type="checkbox"
              name="isDone"
              id="isDone"
              checked={x.isDone}
            />
            <span>{x.text}</span>
            <button type="button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App1;
