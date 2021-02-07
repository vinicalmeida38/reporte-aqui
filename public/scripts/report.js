function registerProblem(e) {
  e.preventDefault();

  const userId = localStorage.getItem("userId");
  const title = document.getElementById("title-report").value;
  const location = document.getElementById("location-report").value;
  const evidence = document.getElementById("evidence-report").value;
  const description = document.getElementById("description-report").value;
  const status = "Aberto";

  console.log(title);

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
    })
    .catch(function (error) {
      alert("Houve um erro no envio do relato! Tente novamente.", error);
    });
}
