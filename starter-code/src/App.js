import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
const actors = [];

for (let i = 0; i < 5; i++) {
  actors.push(contacts[i]);
}

class App extends Component {
  state = {
    actors: actors
  };
  //////////////////////////////////////////ADD RANDOM ACTOR/CONTACT
  addADude = () => {
    console.log("CLICKED", this);
    let copyOfAllActors = [...this.state.actors];
    var rand = contacts[Math.floor(Math.random() * contacts.length)];
    copyOfAllActors.unshift(rand);
    this.setState({
      actors: copyOfAllActors
    });
  };
  //////////////////////////////////////////SORT ALPHABETICALLY
  sortByName = () => {
    let copyOfActors = [...this.state.actors];
    let contax = (n, m) => {
      let contax = 0;
      if (n.name > m.name) {
        contax = 1;
      } else if (n.name < m.name) {
        contax = -1;
      }
      return contax;
    };
    copyOfActors.sort(contax);
    this.setState({
      actors: copyOfActors
    });
  };
  ///////////////////////////////////////////SORT BY POPULARITY
  sortByPop = () => {
    let copyOfActors = [...this.state.actors];
    let contax = (n, m) => {
      let contax = 0;
      if (n.popularity < m.popularity) {
        contax = 1;
      } else if (n.popularity > m.popularity) {
        contax = -1;
      }
      return contax;
    };
    copyOfActors.sort(contax);
    this.setState({
      actors: copyOfActors
    });
  };
  ////////////////////////////////////////////LOOP THROUGH ACTORS/CONTACTS IN A TABLE
  loopThroughActors = () => {
    let actorsCopy = this.state.actors.map((actor, i) => {
      return (
        <div className="tbl">
          <tr key={i}>
            <td>
              <img src={actor.pictureUrl} />
            </td>
            <td>{actor.name}</td>
            <td>{actor.popularity}</td>
            <button
              onClick={() => {
                this.deleteActor(i);
              }}
            >
              Delete
            </button>
          </tr>
        </div>
      );
    });
    return actorsCopy;
  };
  /////////////////////////////////////////////DELETE SELECTED ACTOR/CONTACT
  deleteActor = j => {
    let actorsCopy = [...this.state.actors];
    actorsCopy.splice(j, 1);
    this.setState({
      actors: actorsCopy
    });
  };

  /////////////////////////////////////////////RENDER
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={this.addADude}>Add Random</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPop}>Sort By Popularity</button>
        <th>Picture Name Popularity</th>
        <table>{this.loopThroughActors()}</table>
      </div>
    );
  }
}

export default App;
