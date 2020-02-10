var player1 = {
  name: "Ben",
  place: "Kisumu",
  health: 30
};

var player2 = {
  name: "Diana",
  place: "Kakamega",
  health: 50
};

var showPlayerInfo = function(playerName, playerPlace, playerHealth) {
  console.log(
    ` ${playerName} lives in ${playerPlace} has health ${playerHealth}`
  );
};
showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);
