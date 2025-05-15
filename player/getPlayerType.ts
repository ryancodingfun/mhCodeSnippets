export function getPlayerType(player: Player, world: World): PlayerType {
    if (player === world.getServerPlayer()) {
      return "server";
    } else if (!world.getPlayers().includes(player)) {
      return "departed";
    } else if (player.isInBuildMode.get()) {
      return "builder";
    } else if (AvatarAIAgent.getGizmoFromPlayer(player) !== undefined) {
      return "npc";
    } else {
      return "human";
    }
  }