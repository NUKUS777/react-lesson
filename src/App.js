import ComponentA from './components/ComponentA';
import './App.css';

function App() {
   const firstName = 'Muhammadrasul';
   const lastName = 'Nurmukhamedov';
  return (
    <div className="App">
      <ComponentA ism={firstName} lastName = {lastName}/>
    </div>
  );
}

export default App;
