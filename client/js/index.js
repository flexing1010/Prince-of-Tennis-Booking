const matchMakingButton = document.getElementById("to-match-making");
const waitingRoomButton = document.getElementById("to-waiting-room");

const handleMatchMakingBtn = () => {
  location.href = "match_making.html";
};
const handleWaitingRoomButton = () => {
  location.href = "matching.html";
};

matchMakingButton.addEventListener("click", handleMatchMakingBtn);
waitingRoomButton.addEventListener("click", handleWaitingRoomButton);
