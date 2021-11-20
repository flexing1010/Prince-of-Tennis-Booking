import { courtInfo } from "../json/court.js";

const courtList = document.querySelector(".court-list");

const createCourtInfo = (courtInfo) => {
  const ul = document.createElement("ul");
  const courtTemplate = document.getElementById("court-infocard");
  courtInfo.forEach((court) => {
    const infoCards = document.importNode(courtTemplate.content, true);
    infoCards.querySelector("li").id = `${court.courtId}`;
    infoCards.querySelector(".court-name").textContent = `${court.courtName}`;
    infoCards.querySelector(".address").textContent = `${court.address}`;
    infoCards.querySelector(".surface").textContent = `${court.surface}`;
    infoCards.querySelector(".number").textContent = `${court.number}`;
    infoCards.querySelector(".facility").textContent = `${court.facility}`;

    ul.appendChild(infoCards);
  });
  courtList.replaceWith(ul);
};

if (courtInfo) {
  createCourtInfo(courtInfo);
}
