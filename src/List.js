import React from 'react'
import './List.css'
function List({people}) {
    return (
        <>
           {people.map((person)=>{
           
            return <article key={person.id} className='person '>
            <img  src={person.image} alt={person.name}/>
            <div>
                <h4>{person.name}</h4>
                <p>{person.age}</p>
            </div>
                   </article>
           })}
        </>
    )
}

export default List
