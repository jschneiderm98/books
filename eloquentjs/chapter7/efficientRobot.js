// Your code here
function closest(parcels, rodaGraph, place, collectedParcels) { 
  const collectRoutes = parcels
    .filter((parcel) => parcel.place != place)
    .map((parcel) => findRoute(roadGraph, place, parcel.place));
  const deliveryRoutes = collectedParcels
    .map((parcel) => findRoute(roadGraph, place, parcel.address));
  
  let smallest = {length: Infinity};
  for (route of deliveryRoutes) {
   	if(route.length < smallest.length) smallest = route;
  }
  for (route of collectRoutes) {
   	if(route.length < smallest.length) smallest = route;
  }
  return smallest[0];
}

function goalOrientedReformedRobot({place, parcels}, collectedParcels) {
  const collectParcels = parcels.filter((parcel) => parcel.place == place);
  collectedParcels = collectedParcels.concat(collectParcels);
  if(collectedParcels.length) collectedParcels = 
    collectedParcels.filter((parcel) => parcel.address !== place);
  const route = closest(parcels, roadGraph, place, collectedParcels);
  return {direction: route, memory: collectedParcels};
}

runRobotAnimation(VillageState.random(), goalOrientedReformedRobot, []);