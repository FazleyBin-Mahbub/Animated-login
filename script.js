const gotoNext = () => {
  const userName = document.getElementById("username");
  const password = document.getElementById("password");

  const userEmail = userName.value;
  const userPass = password.value;
  if (userEmail === "mdrabbihossen.dev@gmail.com" && userPass === "abcd@#12") {
    window.open("https://www.facebook.com/fazleybinmahbub26", "_blank");
  } else {
    console.log("nothing");
  }
};
