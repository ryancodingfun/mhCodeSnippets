import { Component, *`CodeBlockEvent`*, Entity, PropTypes } from 'horizon/core';

class CodeBlockEvent_TS extends Component{
  sendEvent = new CodeBlockEvent<[player_name: String, player_id: Number]>('sendEvent', [PropTypes.String, PropTypes.Number]);

  start () {
    // Register to receive CodeBlock event.
    this.connectCodeBlockEvent(
      this.entity,
      this.sendEvent,
      (player_name: String, score: Number) => {
        console.log(player_name + ": " + score);
      });

    // Delay by 500 milliseconds to ensure listeners are ready.
    this.async.setTimeout(() => {
      this.sendCodeBlockEvent(
        this.entity,
        this.sendEvent,
        "Player One",
        123
      );
    }, 500);
  }
}

Component.register(CodeBlockEvent_TS);