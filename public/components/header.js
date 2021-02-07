function headerComponent(page) {
  const header = document.querySelector(".header");
  const url = window.location.href;

  page =
    url.includes("/portal-citizen") || url.includes("/report")
      ? "Portal Cidadão"
      : "Portal Servidor Público";

  return (header.innerHTML = `
        <h1 class="header--title">ReporteAqui</h1>
        <div>
            <span>${page}</span>
            <span>|</span>
            <button class="header--btn" type="button" onclick="logout(event);">Sair</button>
        </div>
    `);
}

headerComponent();

function logout(event) {
  event.preventDefault();
  localStorage.clear();
  window.location.href = "/";
}
