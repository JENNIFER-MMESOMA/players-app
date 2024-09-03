import players from "./player";
import PlayersCard from "./components/PlayersCard";
const App= ()=> {
 return  <section className="container">
    <div className="row">
    {players.length > 0 && players.map((player)=>{
      return <PlayersCard
      key={player.id}
              playerName={player.name}
              playerNetworth={player.networth}
              playerDesc={player.description}
              playerImage={player.image}/>;
    })}
    {players.length === 0 && <h1>No players Found</h1>}
    </div>
  </section>
}

export default App;
