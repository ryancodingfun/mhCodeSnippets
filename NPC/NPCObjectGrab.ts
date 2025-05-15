import * as hz from 'horizon/core';
import { AgentGrabActionResult, AvatarAIAgent } from 'horizon/avatar_ai_agent';

class testScriptedNPCGrab extends hz.Component<typeof testScriptedNPCGrab> {
  static propsDefinition = {
    npc: { type: hz.PropTypes.Entity },
    weapon: { type: hz.PropTypes.Entity },
  };

  start() {
    if (!this.props.weapon) {
      console.error("No weapon defined!");
      return;
    };
    let myWeapon: hz.Entity = this.props.weapon;

    if (this.props.npc) {
      let npcGizmo = this.props.npc.as(AvatarAIAgent);
      this.connectCodeBlockEvent(
        this.entity,
        hz.CodeBlockEvents.OnPlayerEnterTrigger,
        (player) => {
          npcGizmo.grabbableInteraction.grab(hz.Handedness.Right, myWeapon).then((grabResult) => {
              switch (grabResult) {
                case AgentGrabActionResult.Success:
                  console.log("Grabbin' my gun!")
                  break;
                case AgentGrabActionResult.AlreadyHolding:
                  console.log("Already got it.");
                  break;
                case AgentGrabActionResult.NotAllowed:
                  console.log("Hey, how come I can't grab muh gun?");
                  break;
                case AgentGrabActionResult.InvalidEntity:
                  console.error("Invalid entry error grabbing gun");
                  break;
              };
            });
          });

      this.connectCodeBlockEvent(
        this.entity,
        hz.CodeBlockEvents.OnPlayerExitTrigger,
        (player) => {
            npcGizmo.grabbableInteraction.drop(hz.Handedness.Right);
            console.log("Ok, let's talk then.");
          })
    } else {
      console.error("No NPC defined!")
      return;
    };

  };
};
hz.Component.register(testScriptedNPCGrab);