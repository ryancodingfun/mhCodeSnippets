import { Component, Player, Vec3 } from "horizon/core";

class TeleportPlayer extends Component {
  start() {
    // Get the local player
    const player = this.world.getLocalPlayer();

    // Define the teleport location
    const teleportLocation = new Vec3(10, 5, 0);

    // Teleport the player
    player.position.set(teleportLocation);
  }
}

Component.register(TeleportPlayer);