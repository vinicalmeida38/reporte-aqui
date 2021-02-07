function allReportsComponent() {
  const reportList = document.querySelector(".reports__list");

  reportList.innerHTML = "Carregando...";

  db.collection("problems")
    .get()
    .then((data) => {
      reportList.innerHTML = "";
      data.forEach((problem) => {
        return (reportList.innerHTML += `
            <div class="report">
              <div>
                  <h2>${problem.data().title}</h2>
                  <p>Local: ${problem.data().location}</p>
                  <p>Descrição: ${problem.data().description}</p>
                  <label for="status">Status: </label>
                  <select name="status" id="${
                    problem.id
                  }" onchange="changeStatus(this.id, this.value)">
                     <option value="" disabled selected>Selecione um status</option>
                     <option value="Aberto">Aberto</option>
                     <option value="Em análise">Em análise</option>
                     <option value="Em andamento">Em andamento</option>
                     <option value="Concluído">Concluído</option>
                  </select>
                  <input class="report--status" type="text" disabled value="${
                    problem.data().status
                  }">
              </div>
              <div>
                  <img src="${problem.data().evidence}" alt="${
          problem.data().title
        }" width="200px">
              </div>
          </div>
            `);
      });
    })
    .catch(() => {
      alert("Houve um erro na listagem de problemas!");
    });
}

allReportsComponent();

function changeStatus(doc, status) {
  db.collection("problems")
    .doc(doc)
    .update({
      status: status,
    })
    .then(() => {
      console.log("updated!");
    });
}
