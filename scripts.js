navigator.geolocation.watchPosition((position) => {
  displayDistance(position.coords.latitude, position.coords.longitude);
});

function displayDistance(latitude, longitude) {
  const distanceDisplay = document.getElementById("distance-display");
  const zoneDisplay = document.getElementById("zone-display");

  const latDistance = (latitude - 55.0086174) * 69;
  const longDistance = (Math.abs(longitude) - 1.5832795) * 40;

  const distanceMiles = Math.round(
    Math.sqrt(latDistance * latDistance + longDistance * longDistance)
  );

  distanceDisplay.innerHTML = distanceMiles;

  const zones = [
    "workie ticket",
    "haddaway",
    "Sting",
    "eeeeeee",
    "Cheryl Cole",
    "Magpies",
    "Clamming",
    "Alan Shearer",
    "Greggs",
    "Blaydon Races",
  ];

  const zoneIndex =
    Math.round((distanceMiles / 100) * zones.length) % zones.length;

  zoneDisplay.innerHTML = zones[zoneIndex];

  console.log(zones[zoneIndex]);
}
