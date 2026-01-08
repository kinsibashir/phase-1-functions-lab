// // 1. Distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
  const hq = 42; // Scuber HQ is on 42nd Street
  return Math.abs(someValue - hq); // absolute difference in blocks
}

// 2. Distance from HQ in feet
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264; 
  // use the blocks function, then convert to feet
}

// 3. Distance travelled in feet (uptown/downtown only)
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
  // absolute difference ensures no negative values
}

// 4. Fare price calculation
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // first 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // flat fare
  } else {
    return 'cannot travel that far'; // over 2500 feet not allowed
  }
}
