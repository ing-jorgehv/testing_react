import React, {useState} from 'react';

export const FirstComponent = () => {

  // let nombre = "Jorge";
  let web = "ing-jorgehv";

  const [name, setName] = useState ("Jorge")

  let courses = [
    "Master on JavaScript",
    "Master on PHP",
    "Master on React",
    "Master on CSS"
  ];

  const changeName = (newName) => {
    setName(newName); 
  }

  return (
    <div>
        <h1>My 1st component of React</h1>
        <p>This is the text in the 1st component</p>
        <p>My name is <strong className={name.length >= 4 ? 'green' : 'red' }>{name}</strong></p>
        <p>My website is {web}</p>


        <input type="text" onChange={e => changeName(e.target.value)} placeholder={'Cambia el nombre'}/>


        <button onClick={e => {
          console.log("El valor guardado en tu estado es:",name);
        } }>Show state value</button>



        <button style={{fontSize:'20px'}} onClick={ e => changeName ("Jorge Hernández")}>Change Name</button>

        <h2>Courses:</h2>
        <ul>
          {
            courses.map((course, index) => {
              return (<li key = {index}>
                {course}
              </li>)
            })

          }
        </ul>
    </div>
  )
}
