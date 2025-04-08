import {Component, LocalEvent} from 'horizon/core';

class MyEventExample extends Component {
  testEvent = new LocalEvent<{message: String}>('testEvent');

 start () {
    // Register to receive Local Event.
    this.connectLocalEvent (
      this.entity,
      this.testEvent,
      (data: {message: String}) => {
        console.log(data.message);
      });

    // Delay by 500 milliseconds to ensure listeners are ready.
    this.async.setTimeout(() => {
      this.sendLocalEvent(
        this.entity,
        this.testEvent,
        {message: "My Local Event Test"}
      );
    }, 500);
  }
}

Component.register(MyEventExample);