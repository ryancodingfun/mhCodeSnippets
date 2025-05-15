  // Add a custom input button to enable players to reset their camera to the previous camera mode.
  // We use this when the camera mode is set to Fixed to avoid players getting stuck in a fixed camera mode.
  displayCameraResetButton(on: boolean) {
    if (on) {
      if (!this.cameraResetHasRegisteredCallback) {
        this.cameraResetInput = hz.PlayerControls.connectLocalInput(hz.PlayerInputAction.LeftGrip, hz.ButtonIcon.Door, this, {preferredButtonPlacement: hz.ButtonPlacement.Default});
        this.cameraResetInput.registerCallback((action, pressed) => {
          if(pressed) {
            this.onCameraResetButtonPressed();
          };
        });
        this.cameraResetHasRegisteredCallback = true;
      };
    } else if (this.cameraResetInput !== undefined) {
      this.cameraResetInput?.disconnect();
      this.cameraResetHasRegisteredCallback = false;
    };
  };