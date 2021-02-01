import React, {useState} from 'react';
import List from './List'
import data from './data'
import "./App.css"
function App() {

  const[people, setPeople]= useState(data)
  return (
    <div className='app'>
    <main className='container'>
      <section>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={()=>setPeople([])}>Clear All</button>
      </section>      
    </main>
    </div>
  );
}

export default App;
