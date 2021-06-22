class Player {
  constructor() {
    this.playerName = "";
    this.distance = 0;
    this.position = null;
    this.rank=null;
  }
  readPlayerCount() {
    var playerCountValue = database.ref("playerCount");
    playerCountValue.on("value", function (data) {
      playerCount = data.val();
    });
  }

  writePlayerCount(x) {
    database.ref("/").update({
      playerCount: x,
    });
  }

  readCarsAtEnd() {
    var carsAtEndValue = database.ref("carsAtEnd");
    carsAtEndValue.on("value", function (data) {
      carsAtEnd = data.val();
    });
  }

  writeCarsAtEnd(y) {
    database.ref("/").update({
      carsAtEnd: y,
    });
  }

  createPlayerField() {
    var c = "allPlayers/player" + this.position;
    database.ref(c).set({
      playerName: this.playerName,
      distance: this.distance,
    });
  }

  readAllPlayers() {
    var allplayersref = database.ref("allPlayers");
    allplayersref.on("value", function (data) {
      allPlayers = data.val();
    });
  }
}
