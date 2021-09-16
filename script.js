const userName = document.getElementById("username");
const password = document.getElementById("password");

const userEmail = userName.value;
const userPass = password.value;
const gotoNext = () => {
  if (userEmail == "mdrabbihossen.dev@gmail.com" && userPass == "abcd@#12") {
    window.location.href = "https://www.google.com/";
  } else {
    console.log("nothing");
  }
};
