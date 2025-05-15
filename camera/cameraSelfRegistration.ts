start() {
    // Self register this PlayerCamera to the PlayerManager using a broadcast event.
    // We are using a broadcast event because it is easier to add / remove cameras as you adjust the number of max players for your world.
    // For more performance at world startup you may want to make this a non-broadcast network event and use the propsDefinition
    //  to specify a reference to the PlayerManager, then just use a sendNetworkEvent directly.
    this.sendNetworkBroadcastEvent(CameraManagerEvents.OnRegisterPlayerCamera, {ObjectId: "PlayerCamera", Object: this.entity});
  };