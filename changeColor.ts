import { Component, Entity, Color } from "horizon/core";

class ChangeColorComponent extends Component {
  start() {
    this.entity.color.set(new Color(0, 255, 0)); // Set color to green
  }
}

Component.register(ChangeColorComponent);