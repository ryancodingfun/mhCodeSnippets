import { Component, *`CodeBlockEvent`*, Entity, PropTypes } from 'horizon/core';

class CodeBlockEvent_CB extends Component<typeof CodeBlockEvent_CB> {

  static propsDefinition= {
    target: {type: PropTypes.Entity},
  };

  sendEvent = new CodeBlockEvent<[player_name: String, player_id: Number]>('sendEvent', [PropTypes.String, PropTypes.Number]);
  receiveEvent = new CodeBlockEvent<[score: Number]>('receiveEvent', [PropTypes.Number]);

  start() {
    // Register for CodeBlock events.
    this.connectCodeBlockEvent(
    this.entity,
    this.receiveEvent,
    (score: Number) => {
       console.log(score);
     });

    // Delay by 500 milliseconds to ensure listeners are ready.
    this.async.setTimeout(() => {
      this.sendCodeBlockEvent(
        this.props.target!,
        this.sendEvent,
        "Player One",
        123
      );
     }, 500);
    }
  }
Component.register(CodeBlockEvent_CB);