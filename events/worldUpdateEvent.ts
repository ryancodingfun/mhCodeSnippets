import { Component, World } from 'horizon/core';

class WorldUpdateEventExample extends Component {
 start() {
    this.connectLocalBroadcastEvent(
      World.onUpdate,
      (data: {deltaTime: number}) => {
        // Perform an action during the Update step.
      }
    );
   
    this.connectLocalBroadcastEvent(
      World.onPrePhysicsUpdate, 
      (data: {deltaTime: number}) => {
        // Perform an action during the Pre-Physics Update step.
      }
    );
  }
}

Component.register(WorldUpdateEventExample);