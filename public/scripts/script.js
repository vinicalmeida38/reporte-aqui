function registerProblem(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;
  const evidence = document.getElementById("evidence").value;

  db.collection("problems")
    .add({
      title: title,
      description: description,
      location: location,
      evidence: evidence,
    })
    .then(() => {
      alert("Relato enviado com sucesso!");
    })
    .catch(function (error) {
      alert("Houve um erro no envio do relato! Tente novamente.", error);
    });
}

function removeProblem(index) {
  db.collection("problems")
    .doc(index)
    .delete()
    .then(() => {
      alert("Problema deletado!");
      listProblems();
    })
    .catch(() => {
      alert("Houve um erro na remoção do relato! Tente novamente.");
    });
}

function listProblems() {
  const problemList = document.getElementById("problem-list");
  problemList.innerHTML = "";

  db.collection("problems")
    .get()
    .then((data) => {
      data.forEach((problem) => {
        return (problemList.innerHTML += `<div>
            <h1>${problem.data().title}</h1>
            <ul>
                <li>${problem.data().description}</li>
                <li>${problem.data().location}</li>
                <li><img src="${problem.data().evidence}" alt="${
          problem.data().title
        }"></li>
            </ul>
            <button onclick=removeProblem("${problem.id}")>
                  Remover
              </button>
        </div>`);
      });
    })
    .catch(() => {
      problemList.innerText = "Houve um erro na listagem de problemas!";
    });
}
