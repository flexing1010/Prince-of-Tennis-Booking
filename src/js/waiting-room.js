const chatContainer = document.querySelector(".chat-container");

const creator = document.querySelector(".creator");
const participants = document.querySelector(".participants");
const gameType = document.querySelector(".game-type");
const court = document.querySelector(".court");
const matchDate = document.querySelector(".match-date");
const payMethod = document.querySelector(".pay-method");
const ntrp = document.querySelector(".ntrp");

const id = window.location.pathname.split("/")[2];

const displayMatchInfo = (matchInfo) => {
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
};

const displayChat = (chatInfo) => {
  chatInfo.forEach((chat) => {
    const chatBox = document.createElement("div");
    const writer = document.createElement("small");
    chatBox.innerText = chat.content;
    writer.innerText = chat.writer;
    chatBox.appendChild(writer);
    chatContainer.appendChild(chatBox);
  });
};

const fetchGameInfo = fetch(
  `http://localhost:5000/waiting-room/${id}/info`
).then(async (res) => {
  const matchInfo = await res.json();
  const chats = matchInfo.chats;
  displayMatchInfo(matchInfo);
  displayChat(chats);
});
