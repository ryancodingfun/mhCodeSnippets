import * as hz from 'horizon/core';
import { AgentLocomotionOptions, AgentSpawnResult, AvatarAIAgent } from 'horizon/avatar_ai_agent';

class testScript03 extends hz.Component<typeof testScript03> {

  static propsDefinition = {
    npc: { type: hz.PropTypes.Entity },
  };


  start() {
    if (this.props.npc) {
      let npcGizmo = this.props.npc.as(AvatarAIAgent);

      this.connectCodeBlockEvent(
        this.entity,
        hz.CodeBlockEvents.OnPlayerEnterTrigger,
        (player) => {
          npcGizmo.spawnAgentPlayer().then((spawnResult) => {
            switch (spawnResult) {
              case AgentSpawnResult.Success:
                console.log("Behold the wizard!");
                break;
              case AgentSpawnResult.AlreadySpawned:
                console.log("The wizard has been here all along!");
                break;
              case AgentSpawnResult.WorldAtCapacity:
                console.log("There's no room for the wizard...");
                break;
              case AgentSpawnResult.Error:
                console.log("Can't spawn the wizard");
                break;
            };
          });
        });


      this.connectCodeBlockEvent(
        this.entity,
        hz.CodeBlockEvents.OnPlayerExitTrigger,
        (player) => {
          console.log("See ya, wizard!")
          npcGizmo.despawnAgentPlayer()
        });
    };
  };
};
hz.Component.register(testScript03);