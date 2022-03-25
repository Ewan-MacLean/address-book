import './App.css';
import Contact from './components/Contact/contact';
import ContactList from './components/ContactList/contactList';

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
