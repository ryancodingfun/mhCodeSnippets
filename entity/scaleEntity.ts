import { Component, Entity, Vec3 } from "horizon/core";

class ScaleComponent extends Component {
  start() {
    // Assuming this.entity is the entity you want to scale
    this.entity.scale.set(new Vec3(2, 2, 2)); // Scale entity to 2x its original size
  }
}

Component.register(ScaleComponent);