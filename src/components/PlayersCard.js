const PlayersCard = (props) =>{
 return (
    <div className="col-md-4">
    <div className="card" style={{ width: "100%" }}>
      <img src={props.playerImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.playerName}</h5>
        <p className="card-text">{props.playerNetworth}</p>
        <p className="card-text">{props.playerDesc}</p>
      </div>
    </div>
  </div>
 );
};

export default PlayersCard;