this.connectCodeBlockEvent(
    this.entity,
    hz.CodeBlockEvents.OnPlayerEnterWorld,
    (player: hz.Player) => {
      // isNPC == true -> NPC; isNPC == false -> player
      const isNpc = AvatarAIAgent.getGizmoFromPlayer(player) !== undefined;
    }
  );