import { Component, Player } from "horizon/core";

class GetPlayerPosition extends Component {
  start() {
    const player = this.world.getLocalPlayer();
    if (player) {
      const position = player.position.get();
      console.log(`Player position: ${position.x}, ${position.y}, ${position.z}`);
    }
  }
}

Component.register(GetPlayerPosition);