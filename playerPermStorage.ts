import { Component } from "horizon/core";

class RetrievePlayerVariable extends Component {
  start() {
    // Get the local player
    const player = this.world.getLocalPlayer();

    // Retrieve a player variable from persistent storage
    const score = this.world.persistentStorage.getPlayerVariable<number>(player, "score");

    // Log the retrieved variable to the console
    console.log(`Player's score: ${score}`);
  }
}

Component.register(RetrievePlayerVariable);


// set a player's variable

import { Component } from "horizon/core";

class SetPlayerVariableInPersistentStorage extends Component {
  start() {
    // Get the local player
    const player = this.world.getLocalPlayer();

    // Set a player variable in persistent storage
    this.world.persistentStorage.setPlayerVariable(player, "myVariable", 10);
  }
}

Component.register(SetPlayerVariableInPersistentStorage);