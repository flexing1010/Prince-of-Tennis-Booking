const profileForm = document.querySelector(".profile-form");
const formEl = document.forms.profileForm;

const postProfile = (e) => {
  e.preventDefault();
  //   const data = Object.fromEntries(new FormData(e.target).entries());
  console.log(formEl);
  const formData = new FormData(document.querySelector("form"));

  fetch("http://localhost:5000/create-profile", {
    method: "post",
    body: formData,
  });
  console.log(e.target);
};

profileForm.addEventListener("submit", postProfile);
