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

const Header = React.createClass({//React.createClass---palabra reservada
  //para imprimir en la pagina utilizar el metodo RENDER
  render: function () {
    return (
      <div className="header">
        <div className="col-md-8">
          <p>PLAYERS:{players.length}</p>
          <p>TOTAL POINTS:{}</p>
        </div>

        <div className="col-md-4">
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
      <div className="player">
        {
          players.map((players, index) => {
            return (
              <div row>
                {/* <div > */}
                <div className="player-name col-xs-10" >
                  <p key={index}> {players.name} </p>
                  {/* </div> */}

                  {/* <div> */}
                  <div className="player-score col-xs-2">
                    <p key={index}> {players.score} </p></div>
                </div>
                {/* </div> */}

              </div>
            )
          })
        }
      </div>)
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
        <PlayerForm players={players}/>
      </div>
  );
}

ReactDOM.render(<Application title="Scoreboard" players={players} />, document.getElementById('container'));
