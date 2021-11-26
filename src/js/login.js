const loginForm = document.querySelector(".login-form");

const handleSubmit = (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;

  fetch("http://localhost:5000/login", {
    method: "post",
    // don't forget to add Content-Type
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(async (res) => {
    const data = await res.json();
    if (data.message === "환영합니다!!") {
      alert(data.message);
      location.href = "/";
    } else {
      alert(data.message);
    }
  });
};

loginForm.addEventListener("submit", handleSubmit);
