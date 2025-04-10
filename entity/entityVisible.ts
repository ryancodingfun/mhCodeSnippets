class TestVisibilityAPIs extends Component<typeof TestVisibilityAPIs> {
    static propsDefinition = {
      sphere: {type: PropTypes.Entity},
    };
  
    start() {
      this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterTrigger, (player) => {
          var sphere = this.props.sphere!;
          var isVisible = sphere.isVisibleToPlayer(player);
          console.log("Object is visible to player: " + isVisible);
  
          if (isVisible){
            sphere.setVisibilityForPlayers([], true);
          } else {
            sphere.resetVisibilityForPlayers();
          }
        });
    }
  }