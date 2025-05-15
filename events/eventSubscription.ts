private grabbingEventSub!: EventSubscription;
private droppingEventSub!: EventSubscription;
private ammoLeft!: number;
private totalAmmo!: number;

public start() {
  const owner = this.entity.owner.get();
  //When the server owns the weapon, ignore the script
  if (owner === this.world.getServerPlayer()) {
    console.log("Script owned by Server Player");
  }  else {
    // Connect to the grab event to cleanup when the weapon is dropped
    this.grabbingEventSub = this.connectCodeBlockEvent(
      this.entity,
      CodeBlockEvents.OnGrabStart,
      this.onWeaponGrabbed.bind(this)
    );

    // Connect to the grab event to cleanup when the weapon is dropped
    this.droppingEventSub = this.connectCodeBlockEvent(
      this.entity,
      CodeBlockEvents.OnGrabEnd,
      this.onWeaponDropped.bind(this)
    );
  }
