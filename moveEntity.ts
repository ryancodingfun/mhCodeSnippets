import { Component, Entity, Vec3 } from "horizon/core";

class MoveToPositionComponent extends Component {
  start() {
    this.entity.position.set(new Vec3(10, 0, 5)); // Move entity to position (10, 0, 5)
  }
}

Component.register(MoveToPositionComponent);