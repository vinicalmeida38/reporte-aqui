const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userId = localStorage.getItem("userId");
  const title = document.getElementById("title-report").value;
  const location = document.getElementById("location-report").value;
  const evidence = document.getElementById("evidence-report").value;
  const description = document.getElementById("description-report").value;
  const status = "Cadastrado";

  db.collection("problems")
    .add({
      id: userId,
      title: title,
      location: location,
      evidence: evidence,
      description: description,
      status: status,
    })
    .then(() => {
      alert("Relato enviado com sucesso!");
      window.location.href = "/portal-citizen";
    })
    .catch(() => {
      alert("Houve um erro no envio do relato! Tente novamente.");
    });
});
