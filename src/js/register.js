const registerForm = document.querySelector(".register-form");

const handleSubmit = (e) => {
  e.preventDefault();
  const checkBox = e.target.terms;
  console.log(checkBox.checked);
  if (checkBox.checked === false) {
    alert("약관에 동의하셔야 합니다");
  } else {
    location.href = "/login";
  }
};

registerForm.addEventListener("submit", handleSubmit);
