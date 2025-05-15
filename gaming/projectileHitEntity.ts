import * as hz from 'horizon/core';


private onProjectileHitEntity(objectHit: Entity, position: Vec3, normal: Vec3, isStaticHit: boolean) {
    //When the projectiles hits an entity, we apply a multiplied force
    //based on the normal to the entity to push it away from the projectile.
  
    this.onHitGeneric(position, normal);
  
    if(isStaticHit) return; // Only apply force to dynamic objects
  
    console.log("projectile hit object");
    objectHit.as(PhysicalEntity)?.applyForceAtPosition(
      normal.mulInPlace(-1 * this.props.objHitForceMultipler),
      position,
      PhysicsForceMode.Impulse);
  }
  