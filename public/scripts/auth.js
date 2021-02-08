const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-register").value;
  const password = document.getElementById("password-register").value;
  const confirmPassword = document.getElementById("confirm-password-register")
    .value;

  if (password === confirmPassword) {
    authFirebase()
      .createUserWithEmailAndPassword(email, password)
      .then((userRecord) => {
        console.log(userRecord.uid);
        alert("Usuário criado com sucesso");
        window.location.href = "/login";
      })
      .catch((err) => {
        alert(err.message);
      });
  } else {
    alert("As senhas inseridas são diferentes!");
  }
});

function authFirebase() {
  return firebase.auth();
}
