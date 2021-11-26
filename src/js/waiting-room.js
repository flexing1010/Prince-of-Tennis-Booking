const container = document.querySelector(".container");

const creator = document.querySelector(".creator");
const participants = document.querySelector(".participants");
const gameType = document.querySelector(".game-type");
const court = document.querySelector(".court");
const matchDate = document.querySelector(".match-date");
const payMethod = document.querySelector(".pay-method");
const ntrp = document.querySelector(".ntrp");

const id = window.location.pathname.split("/")[2];

const fetchGameInfo = fetch(
  `http://localhost:5000/waiting-room/${id}/info`
).then(async (res) => {
  const matchInfo = await res.json();
  console.log(matchInfo);
  creator.innerText = matchInfo.creator;
  if (matchInfo.participants.length != 0) {
    matchInfo.participants.map((participant) => {
      const div = document.createElement("div");
      div.innerText = participant;
      participants.appendChild(div);
    });
  }
  gameType.innerText = matchInfo.gameType;
  court.innerText = matchInfo.court;
  matchDate.innerText = matchInfo.matchDate;
  payMethod.innerText = matchInfo.payMethod;
  ntrp.innerText = matchInfo.ntrp;

  // console.log(matchInfo.gameType);
});

// fetchGameInfo();
