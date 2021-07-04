function run(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  const testSet = Array.apply(null, Array(100)).map(() => VillageState.random());
  const resultSet = testSet.map((state) => [
    run(state, robot1, memory1), 
    run(state, robot2, memory2)
  ]);
  const avgResult = resultSet.reduce((a, b) => [a[0]+b[0],a[1]+b[1]]).map((value) => value/100); 
  console.log("Robot1 average time: ", avgResult[0]);
  console.log("Robot2 average time: ", avgResult[1]);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);