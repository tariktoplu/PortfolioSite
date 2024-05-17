document.addEventListener("DOMContentLoaded", function () {
  var apibutton = document.querySelector("#button");

  apibutton.addEventListener("click", function () {
    var apisection = document.querySelector("#api");
    apisection.scrollIntoView({ behavior: "smooth" });
  });
});

const url =
  "https://football-highlights-api.p.rapidapi.com/last-five-games?teamId=5700782";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "508d8bc808mshcba66fc146d54c7p1c4303jsndba47b66f349",
    "X-RapidAPI-Host": "football-highlights-api.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    const gameList = document.getElementById("game-data");
    gameList.innerHTML = "";

    data.forEach((game) => {
      const gameDate = new Date(game.date).toLocaleDateString();
      const awayTeam = game.awayTeam.name;
      const homeTeam = game.homeTeam.name;
      const score = game.state.score.current;

      const gameItem = document.createElement("div");
      gameItem.classList.add("game-item");

      const dateElement = document.createElement("p");
      dateElement.textContent = `Date: ${gameDate}`;

      const teamsElement = document.createElement("p");
      teamsElement.textContent = `${awayTeam} vs. ${homeTeam}`;

      const scoreElement = document.createElement("p");
      scoreElement.textContent = `Score: ${score}`;

      gameItem.appendChild(dateElement);
      gameItem.appendChild(teamsElement);
      gameItem.appendChild(scoreElement);

      gameList.appendChild(gameItem);
    });
  })
  .catch((error) => console.error(error));
