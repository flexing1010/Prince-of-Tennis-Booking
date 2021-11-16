const matchMakingButton = document.getElementById("to-match-making");
const waitingRoomButton = document.getElementById("to-waiting-room");

const handleMatchMakingBtn = () => {
  location.href = "/matching/match-making";
};
const handleWaitingRoomButton = () => {
  // location.href = "matching.html";
  window.location.href = "/matching";
};

matchMakingButton.addEventListener("click", handleMatchMakingBtn);
waitingRoomButton.addEventListener("click", handleWaitingRoomButton);
