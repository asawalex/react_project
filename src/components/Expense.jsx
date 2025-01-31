import ExspenseElement from './ExspenseElement';
import ExspenseUI from './ExspenseUI';
import { useState } from 'react';

const DummyData = [
  {
    id:'1s',
    date: new Date(2021,11,12),
    title:'squash',
    author:'Eniola',
    description:'new semicolon'
    
  },
  {
    id:'2s',
    date: new Date(2021,11,12),
    title:'squas',
    author:'Enio',
    description:'pay squash section'
  },
  {
   id:'3s', 
    date: new Date(2021,11,12),
    title:'squashs',
    author:'Eniolas',
    description:'pay semicolons bill'
  }
];

function Expense() {
  const [userData,setUserData] = useState(DummyData)
 
  const addUserDetails = (userInput) =>{
    setUserData((previousUserData)=>{
      
      return[userInput,...previousUserData]
    });
  };
console.log(userData)
  return (
    <div className="App">
      <ExspenseUI onAddUserDetails={addUserDetails} />
     <ExspenseElement lists={userData} />
    </div>
  );
}

export default Expense
