this.eventSubscription = this.connectBroadcastEvent(
    World.onUpdate,
    (data: {deltaTime: number}) => {
      // Do an action during the Update Loop.
    }
  );
  
  // Cancel subscription logic.
  if(this.eventSubscription !== null) {
    this.eventSubscription.disconnect();
    this.eventSubscription = null;
  }