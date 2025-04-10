import { Component, AttachableEntity } from "horizon/core";

class DetachEntityFromPlayer extends Component {
  start() {
    // Assuming this.entity is the attachable entity you want to detach
    const attachableEntity = this.entity.as(AttachableEntity);
    if (attachableEntity) {
      attachableEntity.detach();
    }
  }
}

Component.register(DetachEntityFromPlayer);