import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greetings={"Bienvenidos!"}>

   

        </ItemListContainer>
        
      
    </div>
  );
}

export default App;
