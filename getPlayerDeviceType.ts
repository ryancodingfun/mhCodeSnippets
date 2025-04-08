import { Component, Player } from "horizon/core";

class GetPlayerDeviceType extends Component {
  start() {
    const player = this.world.getLocalPlayer();
    const deviceType = player.deviceType.get();
    console.log(`Player device type: ${deviceType}`);
  }
}

Component.register(GetPlayerDeviceType);