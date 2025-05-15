setNewDestination(destination: hz.Vec3){
    this.isIdling = false;
    this.lookAt = destination;
    this.async.setTimeout(() => {
      this.entity.as(NavMeshAgent)?.destination.set(destination);
    }, 300);
  }
  
  findNewDestination(){
    this.destinationAttempts++;
    const rPosition = this.getRandomDestination();
    const delta = rPosition.sub(this.getHeadPosition());
    const dotFwd = hz.Vec3.dot(this.entity.forward.get(), delta);
    if (delta.magnitude() > 4 || (dotFwd < 0.1 && this.destinationAttempts < 5)) {
      this.async.setTimeout(() => {
        this.findNewDestination();
      }, 200);
    } else {
      this.destinationAttempts = 0;
      this.setNewDestination(rPosition);
    }
  }
  
  getRandomDestination(): hz.Vec3 {
    const rx = Math.random() * (this.boundingBox.max.x - this.boundingBox.min.x) + this.boundingBox.min.x;
    const rz = Math.random() * (this.boundingBox.max.z - this.boundingBox.min.z) + this.boundingBox.min.z;
    return new hz.Vec3(rx, 0, rz);
  }
  
  update(deltaTime: number): void {
    super.update(deltaTime);
    if (this.navMeshAgent !== undefined){
      const distanceToTarget = this.navMeshAgent.remainingDistance.get();
      if (distanceToTarget < 0.1) {
        if (!this.isIdling) {
          this.randomIdle();
        }
        this.newDestinationTimer -= deltaTime;
        if (this.newDestinationTimer <= 0) {
          this.newDestinationTimer = this.getNewDestinationDelay();
          this.findNewDestination();
        }
      }
    }
  }