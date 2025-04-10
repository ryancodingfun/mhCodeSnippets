import { Component, Player } from "horizon/core";

class UnfocusPlayerUI extends Component {
  start() {
    // Get the local player
    const player = this.world.getLocalPlayer();
    // Unfocus the player's UI
    player.unfocusUI();
  }
}

Component.register(UnfocusPlayerUI);