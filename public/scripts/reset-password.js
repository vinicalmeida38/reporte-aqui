function resetPassword(e) {
  e.preventDefault();
  const emailReset = document.getElementById("send-email").value;

  authFirebase()
    .sendPasswordResetEmail(emailReset)
    .then(() => {
      alert("E-mail enviado com sucesso");
      window.location.href = "/login";
    })
    .catch((err) => {
      alert(err.message);
    });
}

function authFirebase() {
  return firebase.auth();
}
