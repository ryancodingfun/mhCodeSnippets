import * as hz from 'horizon/core';
import { AgentLocomotionOptions, AvatarAIAgent } from 'horizon/avatar_ai_agent';


class testScript02 extends hz.Component<typeof testScript02> {


  static propsDefinition = {
    npc: { type: hz.PropTypes.Entity },
    waypoint1: { type: hz.PropTypes.Vec3 },
    waypoint2: { type: hz.PropTypes.Vec3 },
    waypoint3: { type: hz.PropTypes.Vec3 },
  };


  start() {
    console.log("testScript02: Running start().");


    let arrWaypoints: hz.Vec3[] = new Array<hz.Vec3>();


    // sets movement options for movement between waypoints
    let movementOptions: AgentLocomotionOptions = {
      movementSpeed: 5,
    };

    if (this.props.npc) {
      if (this.props.waypoint1) {
        arrWaypoints.push(this.props.waypoint1);
          if (this.props.waypoint2) {
            arrWaypoints.push(this.props.waypoint2);;
            if (this.props.waypoint3) {
              arrWaypoints.push(this.props.waypoint3);
            };
          };
      };


      let npcGizmo = this.props.npc.as(AvatarAIAgent);
      if (arrWaypoints[0] != null ) {
        npcGizmo.locomotion.moveToPositions(arrWaypoints, movementOptions);
        } else {
        console.error("No waypoints defined!");
      };
    } else {
      console.error("No NPC defined!");
    };
  };
};
hz.Component.register(testScript02);