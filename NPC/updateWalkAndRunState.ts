private updateWalkAndRunStates(deltaTime: number) {
    if (this.targetPlayer === undefined) {
      this.setState(NPCMonsterState.Idle);
    } else {
      this.navMeshAgent?.destination.set(this.targetPlayer.position.get());
      const distanceToPlayer = this.targetPlayer.position.get().distanceSquared(this.entity.position.get());
      if (distanceToPlayer < this.props.maxAttackDistance*this.props.maxAttackDistance) {
        this.attackTimer -= deltaTime;
        if (this.attackTimer <= 0) {
          this.attackTimer = NPCMonster.attackAnimationDuration;
          console.log("Trigger attack animation");
          this.triggerAttackAnimation();
        }
      }
    }
  }