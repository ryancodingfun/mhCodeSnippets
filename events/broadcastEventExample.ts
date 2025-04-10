import { Component, LocalEvent } from 'horizon/core';

class BroadcastEventExample extends Component {
  testEvent = new LocalEvent<{message: String}>('testEvent');

 start() {
    // Register to receive the Broadcast event.
    this.connectLocalBroadcastEvent(
      this.testEvent,
      (data: {message: String}) => {
        console.log(data.message);
      }
    );

    // Delay by 500 milliseconds to ensure listeners are ready.
    this.async.setTimeout(() => {
      this.sendLocalBroadcastEvent(
        this.testEvent,
        {message: "Broadcast Test"}
      );
    }, 500);
  }
}

Component.register(BroadcastEventExample);