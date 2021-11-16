const matchForm = document.querySelector(".match-making-form");

const handleSubmit = (e) => {
  e.preventDefault();
  location.href = "waiting_room.html";
  console.log("Aa");
};

matchForm.addEventListener("submit", handleSubmit);
