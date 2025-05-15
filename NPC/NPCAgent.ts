import * as hz from "horizon/core";
import { NavMeshAgent } from "horizon/navmesh";
import * as  ab  from "horizon/unity_asset_bundles";

export enum  NPCAgentEmote {
  Wave = "EmoteWave",
  Celebration = "EmoteCelebration",
  Taunt = "EmoteTaunt",
  Yes = "EmoteYes",
  No = "EmoteNo",
  Point = "EmotePoint",
}

export class NPCAgent<T> extends hz.Component<typeof NPCAgent & T> {

// Editable Properties

  static propsDefinition = {
    headHeight: { type: hz.PropTypes.Number, default: 1.8 },
    walkSpeed: { type: hz.PropTypes.Number, default: 1.0 },
    runSpeed: { type: hz.PropTypes.Number, default: 0.0 },
    hasRandomIdle: { type: hz.PropTypes.Boolean, default: false },
  };

  // Private fields
  private assetRef_?: ab.AssetBundleInstanceReference;
  private navMeshAgent_?: NavMeshAgent;
  private lookAt_: hz.Vec3 | undefined;
  private animMoving_: boolean = false;
  private animSpeed_: number = 0.0;
  private animDead_: boolean = false;
  private animLookX_: number = 0.0;
  private animLookY_: number = 0.0;

  // Public properties
  get lookAt(): hz.Vec3 | undefined {
    return this.lookAt_;
  }

  set lookAt(value: hz.Vec3 | undefined) {
    if (value != this.lookAt_) {
      this.lookAt_ = value;
    }
  }

  get dead(): boolean {
    return this.animDead_;
  }

  set dead(value: boolean) {
    if (value != this.animDead_) {
      this.animDead_ = value;
      this.assetRef_?.setAnimationParameterBool("Death", value);
      this.navMeshAgent_?.isImmobile.set(value);
    }
  }

  get navMeshAgent(): NavMeshAgent | undefined {
    return this.navMeshAgent_;
  }

  // Public methods
  triggerAttackAnimation() {
    this.assetRef_?.setAnimationParameterTrigger("Attack", false);
  }

  triggerHitAnimation() {
    this.assetRef_?.setAnimationParameterTrigger("Hit");
  }

  triggerEmoteAnimation(emote: NPCAgentEmote) {

    switch (emote) {

      case NPCAgentEmote.Wave:
        this.assetRef_?.setAnimationParameterTrigger("EmoteWave");
        break;
      case NPCAgentEmote.Celebration:
        this.assetRef_?.setAnimationParameterTrigger("EmoteCelebration");
        break;
      case NPCAgentEmote.Taunt:
        this.assetRef_?.setAnimationParameterTrigger("EmoteTaunt");
        break;
      case NPCAgentEmote.Yes:
        this.assetRef_?.setAnimationParameterTrigger("EmoteYes");
        break;
      case NPCAgentEmote.No:
        this.assetRef_?.setAnimationParameterTrigger("EmoteNo");
        break;
      case NPCAgentEmote.Point:
        this.assetRef_?.setAnimationParameterTrigger("EmotePoint");
        break;
    }
  }
  setMaxSpeedToWalkSpeed() {
    this.navMeshAgent_?.maxSpeed.set(this.props.walkSpeed);
  }

  setMaxSpeedToRunSpeed() {
    this.navMeshAgent_?.maxSpeed.set(
      Math.max(this.props.walkSpeed, this.props.runSpeed)
    );
  }

  // Lifecycle
  start() {

    this.assetRef_ = this.entity.as(ab.AssetBundleGizmo)?.getRoot();
    this.navMeshAgent_ = this.entity.as(NavMeshAgent) || undefined;
    this.navMeshAgent_?.maxSpeed.set(
      Math.max(this.props.walkSpeed, this.props.runSpeed)
    );
    this.navMeshAgent_?.requiredForwardAlignment.set(90);
    this.connectLocalBroadcastEvent(hz.World.onUpdate, (data) => {
      this.update(data.deltaTime);
    });

    // Make sure the random parameter used for selecting a random idle is updated once a second.
    if (this.props.hasRandomIdle) {
      this.async.setInterval(() => {
        this.assetRef_?.setAnimationParameterFloat("Random", Math.random());
      }, 1000);
    }
  }

  update(deltaTime: number) {
    this.updateSpeedAnimationParameters(deltaTime);
    this.updateLookAtAnimationParameters(deltaTime);
  }

  // Private methods
  private updateSpeedAnimationParameters(deltaTime: number) {
    var speed = this.navMeshAgent?.currentSpeed.get() || 0.0;
    var speedAnimationValue = this.calculateSpeedAnimationValue(speed);
    speedAnimationValue = (speedAnimationValue + this.animSpeed_) * 0.5;
    if (speedAnimationValue <= 0.1) {
      speedAnimationValue = 0.0;
    }
    if (speedAnimationValue != this.animSpeed_) {
      this.animSpeed_ = speedAnimationValue;
      this.assetRef_?.setAnimationParameterFloat("Speed", speedAnimationValue);
    }

    var movingAnimationValue = speedAnimationValue > 0.0;
    if (movingAnimationValue != this.animMoving_) {
      this.animMoving_ = movingAnimationValue;
      this.assetRef_?.setAnimationParameterBool("Moving", movingAnimationValue);
    }
  }

  private calculateSpeedAnimationValue(speed: number) {

    // Animation value is between 0 and 1 for walking, and between 1 and 4 for running.

    if (speed < this.props.walkSpeed) {
      return speed / this.props.walkSpeed;
    } else if (this.props.runSpeed <= this.props.walkSpeed) {
      return 1;
    } else if (speed < this.props.runSpeed) {
      return (
        ((speed - this.props.walkSpeed) /
          (this.props.runSpeed - this.props.walkSpeed)) * 3 +1);
     } else {
      return 4;
    }
  }

  private updateLookAtAnimationParameters(deltaTime: number) {

  const playerPos = this.lookAtPlayer.head.position.get()
    const rot = this.entity.rotation.get()
    const pos = this.entity.position.get()
    pos.y += this.props.height/2
    const forward = hz.Quaternion.mulVec3(rot, hz.Vec3.forward)
    const dir = playerPos.sub(pos).normalize()
    const upAngle = Math.sinh(forward.cross(dir).cross(forward).y)/(Math.PI/2)
    const rightAngle = Math.sinh(forward.cross(dir).y)/(Math.PI/2)
    this.asset.setAnimationParameterFloat('LookX', rightAngle)
    this.asset.setAnimationParameterFloat('LookY', upAngle)
  }
hz.Component.register(NPCAgent);