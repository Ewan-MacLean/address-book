import './App.css';
import ContactList from './components/ContactList/contactList';
import { useState, useEffect } from 'react';

function App() {

  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/contacts').then(x=>x.json().then(x=>setData(x)))
  },[])
  
  return (
    <div className="App">
      <ContactList contacts={data}/>
    </div>
  )
}

export default App;
