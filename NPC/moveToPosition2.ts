import * as hz from "horizon/core";
import { AvatarAIAgent } from "horizon/avatar_ai_agent";


export class TriggerZone extends hz.Component<typeof TriggerZone> {
  static propsDefinition = {
    zoneName: { type: hz.PropTypes.String },
    display: { type: hz.PropTypes.Entity },
    npc: { type: hz.PropTypes.Entity },
  };


  static triggerEnteredEvent = new hz.NetworkEvent<{
    player: hz.Player;
    entered: boolean;
    zoneName: string;
  }>("triggerEnteredEvent");


  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterTrigger,
      (player) => {
        this.sendNetworkBroadcastEvent(TriggerZone.triggerEnteredEvent, {
          player,
          entered: true,
          zoneName: this.props.zoneName,
        });
        this.props.npc
          .as(AvatarAIAgent)
          .locomotion.moveToPosition(hz.Vec3.zero)
          .then((result) => console.log("move to position result: " + result));
      };
    );


    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitTrigger,
      (player) => {
        this.sendNetworkBroadcastEvent(TriggerZone.triggerEnteredEvent, {
          player,
          entered: false,
          zoneName: this.props.zoneName,
        });
      };
    );


    if (this.props.display.exists()) {
      this.props.display.as(hz.TextGizmo).text.set(this.props.zoneName);
    };
  };
};
hz.Component.register(TriggerZone);