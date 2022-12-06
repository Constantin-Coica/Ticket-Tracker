
import './App.scss';
import Tickets from './container/Tickets/Tickets';
import team from "./data/team.js";


function App() {
  const users = team;
  

  return (
    <div className="App">
      <Tickets data={team}/>
      
    </div>
  );
}

export default App;
