import logo from './logo.svg';
import './App.css';
const TitoloCorso = (props) => {
  console.log('proprietà' = props);
  return(
  <h1>Corso React 2023</h1>
) 
}
function App() {

  const corsi =[{
  'id': 1,
  'nome': 'React',
  'anno': '2022',
  },
  {
    'id':2,
    'nome': 'Flutter',
    'anno': '2022'
  },
  {
    'id':3,
    'nome': 'Angular',
    'anno': '2024'
  },
  {
    'id':4,
    'nome': 'Vue',
    'anno': '2023'
  }]
  return (  
    <div className="App">
      {corsi.map(() => {
        return <TitoloCorso nome={corso.nome} anno={corso.anno}/>
      })
      }
    </div>
  );
}
export default App;