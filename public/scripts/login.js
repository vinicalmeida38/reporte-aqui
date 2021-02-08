const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;

  authFirebase()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      authFirebase().onAuthStateChanged((user) => {
        if (user) {
          sucessfullLogin(user.uid);
        }
      });
    })
    .catch(() => {
      alert("E-mail ou senha incorretos!");
    });
});

function sucessfullLogin(userId) {
  const citizenPage = document.getElementById("citizen-page");
  const publicServantPage = document.getElementById("public-servant-page");

  const routePage = citizenPage.checked
    ? citizenPage.value
    : publicServantPage.value;

  localStorage.setItem("userId", userId);
  window.location.href = routePage;
}

function authFirebase() {
  return firebase.auth();
}
