/**
 * An AI NPC gizmo, which manages interactions between an LLM powered NPC and players.
 */
export class NPCGizmo extends Entity {
    /**
     * Creates a human-readable representation of the NPCGizmo object.
     * @returns A string representation of the NPCGizmo object.
     */
    override toString() {
      return `[NPCGizmo] (${this.id})`;
    }
  
  /**
     * Request the NPC to add the player to the list of its recognized players.
     *
     * @param player - The player object to be added.
     */
    addRecognizedPlayer(player: Player) {
      bridgeInstance.invoke(BridgeMethod.AddRecognizedPlayer, this, player);
    }
  
    /**
     * Request the NPC to remove the player from the list of its recognized players.
     *
     * @param player - The player object to be removed.
     */
    removeRecognizedPlayer(player: Player) {
      bridgeInstance.invoke(BridgeMethod.RemoveRecognizedPlayer, this, player);
    }
  
    /**
     * Request the NPC to remove all the players from the list of its recognized players.
     */
    removeAllRecognizedPlayers() {
      bridgeInstance.invoke(BridgeMethod.RemoveAllRecognizedPlayers, this);
    }
  
    /**
     * The player entity that represents the NPC.
     */
    npcPlayer: ReadableHorizonProperty<Player | null> = {
      get: () => {
        return bridgeInstance.invoke(BridgeMethod.GetNPCPlayer, this);
      },
    };
  
     /**
     * Adds an item to the list of items of interest for the npc.
     * @param item - The item to add.
     */
    addItemOfInterest(item: Entity) {
      bridgeInstance.invoke(
        BridgeMethod.NPCAddItemOfInterest,
        this,
        item,
      );
    }
  
    /**
     * Removes an item to the list of items of interest for the AI npc.
     * @param item- The item to remove.
     */
    removeItemOfInterest(item: Entity) {
      bridgeInstance.invoke(BridgeMethod.NPCRemoveItemOfInterest, this, item);
    }