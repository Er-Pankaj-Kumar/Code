import './App.css';

let name= 'Pankaj';
let colors=['red','blue','yellow'];

function CheckEvenodd(num){
  if (num != undefined && num % 2 == 0) {
    return <div>Even Number</div>
  }
  else
  return <div>Odd Number</div>
}
function App() {
  return (
    <div className="App">
    <h2>Welcome to React Bootcamp!</h2>
    <p>My name is: {name}</p>
    {CheckEvenodd(2)}
    
    {
      ((num) => {
        if (num != undefined && num %2 == 0 ) {
          return <div>Even Number</div>
        }
        else
          return <div>Odd Number</div>
      })(5)
    }
    <ul>
      {
        colors.map(item => {
          return <li key={item}>{item}</li>
        })
      }
    </ul>
    </div>
  ); 
}

export default App;