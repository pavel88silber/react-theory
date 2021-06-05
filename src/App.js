
import './App.css';
import Car from './Car/Car'

function App() {
  return (
    <div className="App">

        


      <Car name={"Mazda"} year={'2022'}>
        <p style={{color: 'red', fontSize: '2rem', border:'1px solid pink'}}>COLOR</p>
      </Car>
      <Car name="Honda" year='2020' /> 
      <Car name="Tesla" year={'2023'} /> 

    </div>
  );
}

export default App;
