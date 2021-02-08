function allReportsFreeAccessComponent() {
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
                  <input type="text" disabled value="${
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

allReportsFreeAccessComponent();
