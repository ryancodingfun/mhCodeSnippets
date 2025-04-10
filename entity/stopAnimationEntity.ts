import { Component, AnimatedEntity } from "horizon/core";

class StopAnimationComponent extends Component {
  start() {
    // Assuming this.entity is the AnimatedEntity you want to stop the animation for
    (this.entity as AnimatedEntity).stop(); // Stop the animation
  }
}

Component.register(StopAnimationComponent);