let players = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

function totalPoints(players){
  let totalPoints=0;
  for(let player of players)
  totalPoints+=player.score;
  return totalPoints;
}

const Header = React.createClass({//React.createClass---palabra reservada
  //para imprimir en la pagina utilizar el metodo RENDER
  render: function () {
    return (
      <div className="header">
        <div className="col-md-8">
          <p>PLAYERS:{players.length}</p>
          <p>TOTAL POINTS:{totalPoints(players)}</p>
        </div>

        <div className="col-md-4 stopwatch">
          <p>STOPWATH</p>
          <h1>0</h1>
          <button>ATART</button>
          <button>RESET</button>
        </div>
      </div>
    )
  }
})

const PlayerList = React.createClass({//React.createClass---palabra reservada
  //para imprimir en la pagina utilizar el metodo RENDER
  render: function () {
    return (
      <div >
        {
          players.map((players, index) => {//players--objeto del array
            return (
              <div className="player">
                <div className="player-name " >
                  <p key={index}> {players.name} </p>
                </div>

                <div className="player-score counter ">
                  
                  <button className="counter-action decrement">-</button>
                  <p key={index}> {players.score} </p>
                  <button className="counter-action increment">+</button>
                </div>

              </div>

            )
          })
        }
      </div>
      )
  }
})

// <div className="player-name" key={index}>{players.name}</div>
// <div className="player-score" key={index}>{players.score}</div>      

const PlayerForm = React.createClass({//React.createClass---palabra reservada
  //para imprimir en la pagina utilizar el metodo RENDER
  render: function () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 add-player-form">
            <form className="form">
              <input type="text" />
              <input type="submit" />
            </form>

          </div>
        </div>
      </div>
    )
  }
})

const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm players={players} />
    </div>
  );
}

ReactDOM.render(<Application title="Scoreboard" players={players} />, document.getElementById('container'));
