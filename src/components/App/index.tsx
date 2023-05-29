import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import MainApp from '../MainApp';
import {
    useSelector,
} from 'react-redux';

// Let's create import sequence 
// I'd advice to import global modules and then project files
// And let's use absolute or relevant path everywhere

function App() {
  const todos = useSelector((state: {list: { todos: any[] }}) => state.list.todos);
  return (
      // todo list for users:
    <div className="App main">
      <header className="App-header">
        TODO list with users:
        {/* let's remove it if we don't need it */}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
        {/* MAIN APP: */}
        <MainApp todos={todos}/>

        {/* let's move it to separate styled-component */}
        <footer className='App-footer'>
              {/* let's move it to separate styled-component */}
              <a
                href="https://example.org"
                target="_blank"
                className={"App-footer-link"}
              >
                All right reserved
              </a>
        </footer>
    </div>
  );
}

export default App;
