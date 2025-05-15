let npcGizmo = this.props.npc.as(AvatarAIAgent);
npcGizmo.spawnAgentPlayer().then((spawnResult) => {
    if (spawnResult == AgentSpawnResult.Error) {
      console.error("Failed to spawn NPC " + npcGizmo.name.get() + "!")
    };
  };
);