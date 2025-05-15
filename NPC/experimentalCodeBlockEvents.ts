export const ExperimentalCodeBlockEvents = {
    /*
      * Triggered when the NPC disengages from the player.
      */
     OnNpcDisengagePlayer: new CodeBlockEvent<[player: Player, npc: Entity]>(
       'OnNpcDisengagePlayer',
       [PropTypes.Player, PropTypes.Entity],
     ),
   
     /*
      * Triggered when the NPC engages with the player.
      */
     OnNpcEngagePlayer: new CodeBlockEvent<[player: Player, pc: Entity]>(
       'OnNpcEngagePlayer',
       [PropTypes.Player, PropTypes.Entity],
     ),
   
     /*
      * Triggered when the NPC's engagement phase with player changes.
      */
     OnNpcEngagementPhaseChangedEvent: new CodeBlockEvent<
       [npc: Entity, phase: NPCEngagementPhase]
     >('OnNpcEngagementPhaseChanged', [PropTypes.Entity, PropTypes.Number]),
   
     /*
      * This event is raised when the player speaking to LLM's mic level changes
      */
     OnPlayerMicLevelUpdate: new CodeBlockEvent<
       [player: Player, micLevel: number]
     >('OnInternalOnlyPlayerMicLevelUpdate', [PropTypes.Player, PropTypes.Number]),
   };
   
   /**
    * Represents an AI NPC's engagement phase with the user.
    * @privateRemarks
    * Must remain in sync with AelEngagementPhase enum in AelAPIEnums.cs AND
    * NPCEngagementPhase in NpcEngagementPhaseChangedEvent.cs
    */
   export enum NPCEngagementPhase {
     /**
      * The NPC is idle.
      */
     NPCIdle = 0,
   
     /**
      * The npc is listening to the user.
      */
     NPCListening = 1,
   
     /**
      * The npcis about to respond to the user.
      */
     NPCReacting = 2,
   
     /**
      * The npcis speaking to the user.
      */
     NPCResponding = 3,
   
     /**
      * The npcfinished speaking and is yielding to the user.
      */
     NPCYielding = 4,
   
     /**
      * The npcis idle and is still focused on waiting for the user.
      */
     NPCFocusedIdle = 5,
   }