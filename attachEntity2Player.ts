import { Component, AttachableEntity, AttachablePlayerAnchor } from "horizon/core";

class AttachEntityToPlayer extends Component {
  start() {
    // Assuming this.entity is the attachable entity you want to attach to a player
    const attachableEntity = this.entity.as(AttachableEntity);
    if (attachableEntity) {
      attachableEntity.attachToPlayer(this.world.getLocalPlayer(), AttachablePlayerAnchor.Head);
    }
  }
}

Component.register(AttachEntityToPlayer);