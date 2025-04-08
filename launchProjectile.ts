import * as hz from 'horizon/core';

class LaunchProjectile extends hz.Component<typeof LaunchProjectile> {
  static propsDefinition = {
    launcher: {type: hz.PropTypes.Entity}
  };

  start() {
    let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, () => {
      launcherGizmo?.launchProjectile(50);
    });
  }
}

hz.Component.register(LaunchProjectile);