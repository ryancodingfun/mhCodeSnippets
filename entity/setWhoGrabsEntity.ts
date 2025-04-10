import { Component, GrabbableEntity } from "horizon/core";

class MyComponent extends Component {
  start() {
    // Assuming this.entity is the grabbable entity
    const grabbableEntity = this.entity.as(GrabbableEntity);
    if (grabbableEntity) {
      grabbableEntity.setWhoCanGrab([this.world.getLocalPlayer()]); // Only allow the local player to grab
    }
  }
}

Component.register(MyComponent);