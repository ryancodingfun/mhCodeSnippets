public getPathTo(from : hz.Vec3, to : hz.Vec3) : Array<hz.Vec3> {
    let nextPath: NavMeshPath | null;

    let getPathAttempts: number = 0;
    do {
      nextPath = this.manager.navMesh.getPath(from, to);
      getPathAttempts++;
    } while (nextPath == null && getPathAttempts < 20);
    if (nextPath == null) {
      console.warn("Couldn't find any valid paths from ", from.toString(), " to ", to.toString());
      return new Array<hz.Vec3>();
    } ;
    if(!nextPath.pathReachesDestination) {
      console.warn("Path incomplete");
    };
    console.log("Path size: " +  nextPath.waypoints.length + " from ", from.toString(), " to ", to.toString(), " dest " + nextPath.waypoints[nextPath.waypoints.length - 1].toString());
    return nextPath.waypoints;
  };