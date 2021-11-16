import { matchInfo } from "../json/matching_info.js";

const matchList = document.querySelector(".match-list");
const joinBtn = document.querySelector(".join-button");

const createListWithTemplate = (matchInfo) => {
  const ul = document.createElement("ul");
  ul.classList.add("match-list");
  const matchTemplate = document.getElementById("match-infocard");
  matchInfo.forEach((match) => {
    const infoCard = document.importNode(matchTemplate.content, true);
    infoCard.querySelector(
      ".match__header h4"
    ).textContent = `${match.creator}님의 매치 요청`;

    infoCard.querySelector(
      ".match-details .game-type"
    ).textContent = `${match.gameType}`;
    infoCard.querySelector(
      ".match-details .court"
    ).textContent = `${match.court}`;
    infoCard.querySelector(
      ".match-details .match-date"
    ).textContent = `${match.matchDate}`;
    infoCard.querySelector(
      ".match-details .pay-method"
    ).textContent = `${match.payMethod}`;
    infoCard.querySelector(
      ".match-details .ntrp"
    ).textContent = `${match.NTRP}`;

    ul.appendChild(infoCard);
  });
  matchList.replaceWith(ul);
};

if (matchInfo) {
  createListWithTemplate(matchInfo);
}

joinBtn.addEventListener(
  "click",
  () => (location.href = "/matching/match-making")
);
