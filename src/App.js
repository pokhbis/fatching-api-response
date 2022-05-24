
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  return (
    <div className="App">
      <Informations></Informations>
    </div>
  );

  }

  function Informations(){
    const[users, setUsers]= useState({});

//Fatching API link
useEffect(()=>{
    // const url = `https://jsonplaceholder.typicode.com/posts`;
    const url = `https://gorest.co.in/public/v1/users`;
    fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
},{})

return(
    <div>
        <h3> total info: </h3>
        <p>{users.length}</p>
        {/* {users.data} */}
        {
            users.map(user=><User name={user.name} email={user.email}
            key={user.id}></User> )
            }
    </div>
)

}
function User(props){
  return(
    <div>
      <h3>name: {props.name}</h3>
      <h3>name: {props.name}</h3>
      <h3>name: {props.name}</h3>
    </div>
  )
}

export default App;
