function reportsCitizenComponent() {
  const reportList = document.querySelector(".reports__list");
  const userId = localStorage.getItem("userId");
  reportList.innerHTML = "Carregando...";

  db.collection("problems")
    .get()
    .then((data) => {
      reportList.innerHTML = "";
      data.forEach((problem) => {
        if (problem.data().id === userId) {
          return (reportList.innerHTML += `
          <div class="report">  
            <div>
                <h2>${problem.data().title}</h2>
                <p>Local: ${problem.data().location}</p>
                <p>Descrição: ${problem.data().description}</p>
                <label for="status">Status: </label>
                <input type="text" disabled value="${
                  problem.data().status
                }">    
                <br>
                <button class="report--remove-btn" type="button" onclick=removeReport("${
                  problem.id
                }")>Remover</button>        
            </div>
            <div>
                <img src="${problem.data().evidence}" alt="${
            problem.data().title
          }" width="200px">
            </div>
        </div>
          `);
        }
      });
    })
    .catch(() => {
      alert("Houve um erro na listagem de problemas!");
    });
}

reportsCitizenComponent();

function removeReport(doc) {
  db.collection("problems")
    .doc(doc)
    .delete()
    .then(() => {
      alert("Relato excluído com sucesso!");
      reportsCitizenComponent();
    })
    .catch(() => {
      alert("Houve um erro na remoção do relato! Tente novamente.");
    });
}
