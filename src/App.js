import React from 'react';
import Todo from './pages/todo';
import { Routes, Route, Link } from 'react-router-dom'


function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/todo" element={ <Todo/> } />
    </Routes>
    <Link to="/todo">투두리스트</Link>
    </div>
  );
}

export default App;
