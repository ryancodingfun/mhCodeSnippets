import { Component, Player } from "horizon/core";

class CheckAchievementComponent extends Component {
  start() {
    // Get the local player
    const player = this.world.getLocalPlayer();

    // Define the achievement script ID you want to check
    const achievementScriptID = "my_achievement_id";

    // Check if the player has completed the achievement
    if (player.hasCompletedAchievement(achievementScriptID)) {
      console.log(`Player has completed the ${achievementScriptID} achievement`);
    } else {
      console.log(`Player has not completed the ${achievementScriptID} achievement`);
    }
  }
}

Component.register(CheckAchievementComponent);