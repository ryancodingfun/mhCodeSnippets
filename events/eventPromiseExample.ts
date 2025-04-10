import {Component, LocalEvent, EventSubscription} from 'horizon/core';

class MyEventExample extends Component {
  testEvent = new LocalEvent<{message: String}>('testEvent');
  private createEventListenerPromise: Promise<boolean> | undefined = undefined;

  start () {

    this.createEventListenerPromise = new Promise((resolve, reject) => {
      let updates = 0;
      const intervalTime = 500;
    const maxUpdates = 5;
    const intervalId = this.async.setInterval(() => {
        // Register to receive Local Event.
        let myEventSubScription: EventSubscription = this.connectLocalEvent (
          this.entity,
          this.testEvent,
          (data: {message: String}) => {
            console.log(data.message);
    });

        // test if registration worked
        if (myEventSubScription) {
          this.async.clearInterval(intervalId); // be sure to stop executing this logic
          resolve(true);
        }
        else {
          // We can continue to expand this timer as desired. Since we opt out early, we really only wait as
      // long as needed vs for an arbitrary, hard coded amount of time.
          updates++;
          if (updates > maxUpdates) {
            console.error(`Failed to create listener for testEvent in ${updates} tries`);
            this.async.clearInterval(intervalId); // be sure to stop executing this logic
            reject();
          }
        }
      }, intervalTime);
    });

    // if Promise returns: resolve(true)
    this.createEventListenerPromise.then(() => {
      console.log('testEvent: Event listener created');
      this.sendLocalEvent(
        this.entity,
        this.testEvent,
        {message: "My Local Event Test"}
      );
    }).catch(() => {
      // if Promise returns: reject
      console.error('testEvent: Failed to create event listener');
    });
  }
}

Component.register(MyEventExample);